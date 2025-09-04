import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Loader2Icon, CreditCard } from "lucide-react";

import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

// Add your Stripe publishable key here - replace with your actual key
// You can get this from your Stripe dashboard
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const StripePaymentForm: React.FC = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get payment data from URL params
  const amount = params.get("amount");
  const clientSecret = params.get("client_secret");
  const reference = params.get("reference");

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements || !clientSecret) {
      toast.error("Stripe not loaded or payment data missing");
      return;
    }

    setIsProcessing(true);

    try {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        toast.error("Card element not found");
        return;
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        }
      });

      if (error) {
        toast.error(error.message || "Payment failed");
      } else if (paymentIntent.status === 'succeeded') {
        toast.success("Payment successful!");
        navigate(`${location.pathname}?dialog=fundWallet&dialogCurrent=fundSuceess&amount=${amount}`);
      }
    } catch {
      toast.error("Payment processing failed");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!clientSecret) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Payment data missing. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-4">
      {/* Payment Summary */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Payment Summary</h3>
        <div className="flex justify-between items-center">
          <span>Amount:</span>
          <span className="font-bold text-xl">${amount}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>Reference:</span>
          <span>{reference}</span>
        </div>
      </div>

      {/* Card Input - This will be replaced with Stripe CardElement */}
      <div className="space-y-4">
        <h4 className="font-semibold flex items-center gap-2">
          <CreditCard size={20} />
          Payment Details
        </h4>
        
        {/* Stripe CardElement */}
        <div className="border rounded-lg p-4 bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                },
                invalid: {
                  color: '#9e2146',
                },
              },
              hidePostalCode: true,
            }}
          />
        </div>
      </div>

      {/* Payment Button */}
      <Button
        onClick={handlePayment}
        disabled={isProcessing || !stripe || !elements}
        className="w-full"
        size="lg"
      >
        {isProcessing ? (
          <>
            <Loader2Icon className="animate-spin mr-2" size={20} />
            Processing Payment...
          </>
        ) : (
          `Pay $${amount}`
        )}
      </Button>

      {/* Security Notice */}
      <p className="text-xs text-gray-500 text-center">
        Your payment is secured by Stripe. We don't store your card details.
      </p>
    </div>
  );
};

// Main component that will wrap the form with Stripe Elements
const StripePayment: React.FC = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <StripePaymentForm />
      </Elements>
    </div>
  );
};

export default StripePayment;
