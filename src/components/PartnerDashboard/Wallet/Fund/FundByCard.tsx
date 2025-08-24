import { Button } from "@/components/ui/button";
import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fundWallet } from "@/api/apiEndpoints";
import { FundWalletData } from "@/types";
import { toast } from "sonner";
import errorMessage from "@/lib/errorMessage";
import { Loader2Icon } from "lucide-react";

type StripePaymentResponse = {
  detail: string;
  client_secret: string;
  reference: string;
};

const FundByCard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [params] = useSearchParams();
  const amount = params.get("amount");

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FundWalletData) => fundWallet(data) as Promise<StripePaymentResponse>,
    onSuccess: (data: StripePaymentResponse) => {
      console.log("Stripe payment data:", data);
      queryClient.invalidateQueries({ queryKey: ["userDetails"] });
      
      // Store the payment data and navigate to Stripe payment
      if (data?.client_secret) {
        navigate(
          `${location.pathname}?dialog=fundWallet&dialogCurrent=stripe-payment&amount=${amount}&client_secret=${data.client_secret}&reference=${data.reference}`
        );
      }
    },
    onError: (error: Error) => {
      toast.error(errorMessage(error));
    }
  });

  const handleProceedToStripePayment = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    mutate({
      amount: parseFloat(amount),
      payment_method: "card"
    });
  };

  return (
    <div className="font-satoshi space-y-[16px]">
      <h1 className="text-[16px] font-[400]">
        Pay securely with your card using Stripe
      </h1>
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
        <p className="font-medium mb-1">💳 Secure Card Payment</p>
        <p>Your payment will be processed securely by Stripe. We don't store your card details.</p>
      </div>
      <div className="text-sm text-gray-600">
        <p><strong>Amount to pay:</strong> £{amount}</p>
        <p><strong>Payment method:</strong> Credit/Debit Card</p>
      </div>
      <Button 
        onClick={handleProceedToStripePayment}
        disabled={isPending || !amount}
        className="w-full mt-[28px]"
      >
        {isPending ? (
          <>
            <Loader2Icon className="animate-spin mr-2" size={16} />
            Processing...
          </>
        ) : (
          "Proceed to Secure Payment"
        )}
      </Button>
    </div>
  );
};

export default FundByCard;
