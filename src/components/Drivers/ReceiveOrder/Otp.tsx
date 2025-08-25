import { Button } from "../../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../ui/input-otp";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { confirmDeliveryOtp } from "@/api/apiEndpoints";
import { toast } from "sonner";
import errorMessage from "@/lib/errorMessage";
import { Loader2 } from "lucide-react";

const otpSlotClassName =
  "h-16 w-16 text-[32px] data-[active=true]:ring-[0px] border  first:rounded-l-[4px] last:rounded-r-[4px] rounded-[4px] shadow-none  border-[#15221B1A] data-[active=true]:border-[#494949]";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { order_id: string; otp: string }) => confirmDeliveryOtp(data),
    onSuccess: () => {
      toast.success("OTP verified successfully!");
      navigate("/drivers/delivery-form?current=3");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error(errorMessage(error));
    },
  });

  const handleOtpChange = (value: string) => {
    setOtp(value);
    console.log("OTP entered:", value);
  };

  const handleConfirm = () => {
    if (otp.length === 4 && orderId) {
      console.log("Confirming OTP:", otp, "for order:", orderId);
      mutate({ order_id: orderId, otp });
    }
  };

  const handleResendOtp = () => {
    console.log("Resending OTP...");
    // Add your resend logic here
  };

  return (
    <div className="space-y-[15px] flex flex-col items-center">
      <div>
        <h1 className="text-[20px] font-bold text-primary">
          One-Time Passcode (OTP)
        </h1>
        <p className="text-[12px] font-satoshi font-medium">
          Enter OTP sent to Vendor's email
        </p>
      </div>
      <InputOTP maxLength={4} value={otp} onChange={handleOtpChange}>
        <InputOTPGroup className="flex gap-2">
          <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
          <InputOTPSlot index={1} className={otpSlotClassName} />
          <InputOTPSlot index={2} className={otpSlotClassName} />
          <InputOTPSlot index={3} className={otpSlotClassName} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-[12px] font-satoshi font-medium text-[#6E6E6E]">
        Didn't receive OTP? <span className="text-primary cursor-pointer" onClick={handleResendOtp}>Resend OTP</span>
      </p>
      <Button 
        className="w-full bg-[#15221B] text-white py-3 px-4 rounded-lg font-medium"
        onClick={handleConfirm}
        disabled={otp.length !== 4 || isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verifying...
          </>
        ) : (
          "Verify"
        )}
      </Button>
      
      <Button 
        type="button"
        variant="outline"
        className="w-full border-[#15221B] text-[#15221B] py-3 px-4 rounded-lg font-medium"
        onClick={() => navigate("/drivers/delivery-form?current=1")}
        disabled={isPending}
      >
        Go Back
      </Button>
    </div>
  );
}
