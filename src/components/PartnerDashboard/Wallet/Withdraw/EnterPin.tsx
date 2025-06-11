import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useWithdrawalStore from "@/stores/useWithdrawalStore"; // Adjust path as needed
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { walletWithdrawal } from "@/api/apiEndpoints";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import errorMessage from "@/lib/errorMessage";

const otpSlotClassName =
  "h-12 w-12 text-[32px] data-[active=true]:ring-[0px]  first:rounded-l-none first:border-l-0 last:rounded-r-none border-0 shadow-none  border-b-2 border-[#444] data-[active=true]:border-[#494949]";

const EnterPin: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { updateWithdrawal, withdrawal } = useWithdrawalStore();
  const queryClient = useQueryClient()
  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: {
      transaction_pin: string;
      amount: number;
      to: string;
    }) => walletWithdrawal(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userDetails"] })
      navigate(
        "/partner/portfolio/wallet?dialog=walletWithdrawal&dialogCurrent=processing"
      );
      console.log("Withdrawal successful");
    },
    onError: (error: unknown) => {
      console.error("Withdrawal failed:", error);
      // Handle error appropriately, e.g., show a toast notification
    },
  });

  const handleSubmit = () => {
    // Update the withdrawal store with the OTP
    updateWithdrawal({ transaction_pin: otp });
    console.log({
      transaction_pin: otp,
      amount: withdrawal.amount,
      to: withdrawal.to.name.split(" ")[0],
    })
    mutate({
      transaction_pin: otp,
      amount: withdrawal.amount,
      to: withdrawal.to.name.split(" ")[0],
    });
  };

  return (
    <div className="mt-[24px] space-y-[60px]">
      {error as Error && (
        <Alert variant="destructive" className="bg-destructive/10 border-none">
          <AlertTitle>Withrawal failed</AlertTitle>
          <AlertDescription>
            {errorMessage(error as Error)}
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-[24px] font-satoshi flex flex-col items-center">
        <h1 className="font-[500] text-[16px]">Enter withdrawal PIN</h1>
        <InputOTP maxLength={4} value={otp} onChange={setOtp}>
          <InputOTPGroup className="flex gap-2">
            <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
            <InputOTPSlot index={1} className={otpSlotClassName} />
            <InputOTPSlot index={2} className={otpSlotClassName} />
            <InputOTPSlot index={3} className={otpSlotClassName} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full bg-[#15221B]"
        disabled={otp.length < 4 || isPending}
      >
        {isPending ? "Processing..." : "Withdraw"}
      </Button>
    </div>
  );
};

export default EnterPin;
