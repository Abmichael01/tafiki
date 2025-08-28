import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const FundWalletAmount: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FundWalletData) => fundWallet(data) as Promise<StripePaymentResponse>,
    onSuccess: (data: StripePaymentResponse) => {
      console.log("Stripe payment data:", data);
      queryClient.invalidateQueries({ queryKey: ["userDetails"] });
      queryClient.invalidateQueries({ queryKey: ["walletTransactions"] });
      
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

  const handleAmountChange = (e: React.FormEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.textContent || "";
    setAmount(value);
  };

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
    <div className="flex flex-col gap-[60px] items-center font-satoshi mt-[60px]">
      <div className="flex flex-col gap-[12px] items-center w-full">
        <h1 className="text-[20px] font-[500] ">Amount</h1>
        <h1 className="text-[44px] font-[900] flex items-center gap-[8px]">
          <span className="text-[24px] font-[700]">£</span>
          <span
            contentEditable
            autoFocus
            onInput={handleAmountChange}
            className="outline-none pr-4 empty:before:content-['0.00'] empty:before:text-gray-400"
            role="textbox"
            aria-label="Enter amount"
          ></span>
        </h1>
        <Button
          onClick={handleProceedToStripePayment}
          disabled={isPending || !amount || parseFloat(amount) <= 0}
          className="w-full"
        >
          {isPending ? (
            <>
              <Loader2Icon className="animate-spin mr-2" size={16} />
              Processing...
            </>
          ) : (
            "Proceed to Payment"
          )}
        </Button>
      </div>
    </div>
  );
};

export default FundWalletAmount;
