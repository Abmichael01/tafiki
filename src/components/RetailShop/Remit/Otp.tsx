import { Button } from "../../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../ui/input-otp";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { confirmRemittanceOtp } from "@/api/apiEndpoints";
import { toast } from "sonner";
import { Toast } from "@/components/Admin/Toast";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import errorMessage from "@/lib/errorMessage";
import useVendorStore from "@/stores/vendorStore";

const otpSlotClassName =
  "h-16 w-16 text-[32px] data-[active=true]:ring-[0px] border  first:rounded-l-[4px] last:rounded-r-[4px] rounded-[4px] shadow-none  border-[#15221B1A] data-[active=true]:border-[#494949]";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");
  const reference = searchParams.get("reference");
  const vendor = useVendorStore((state) => state.vendor);

  const confirmOtpMutation = useMutation({
    mutationFn: (data: { amount: string; otp: number; reference: string }) => confirmRemittanceOtp(data),
    onSuccess: () => {
      toast.custom(() => (
        <Toast text="Remittance successful" icon={<HiMiniBuildingStorefront />} />
      ));
      navigate("/retail-shop/remittance?current=3");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.custom(() => (
        <Toast
          text={errorMessage(error)}
          decline
          icon={<HiMiniBuildingStorefront />}
        />
      ));
    },
  });

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const handleConfirm = () => {
    if (otp.length === 4 && amount && reference) {
      confirmOtpMutation.mutate({ amount, otp: Number(otp), reference });
    }
    console.log(otp, amount, reference);
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
          Enter OTP sent to Vendor ({vendor?.store_email})
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
        disabled={otp.length !== 4 || confirmOtpMutation.isPending}
      >
        {confirmOtpMutation.isPending ? "Verifying..." : "Verify"}
      </Button>
    </div>
  );
}
