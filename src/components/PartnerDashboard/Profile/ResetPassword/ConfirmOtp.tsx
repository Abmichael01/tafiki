import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const otpSlotClassName =
  "h-16 w-16 text-[32px] data-[active=true]:ring-[0px] border  first:rounded-l-[4px] last:rounded-r-[4px] rounded-[4px] shadow-none  border-[#15221B1A] data-[active=true]:border-[#494949]";

const ConfirmOtp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-[80px]">
      <div className="space-y-[24px] font-satoshi flex flex-col items-center">
        <h1 className="font-[500] text-[16px]">Enter OTP sent to <span className="underline">Johndoe@email.com</span></h1>
        <InputOTP maxLength={6}>
          <InputOTPGroup className="flex gap-2">
            <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
            <InputOTPSlot index={1} className={otpSlotClassName} />
            <InputOTPSlot index={2} className={otpSlotClassName} />
            <InputOTPSlot index={3} className={otpSlotClassName} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button
        onClick={() =>
          navigate(
            "/partner/profile/reset-password?current=resetSuccess"
          )
        }
        className="w-full bg-[#15221B]"
      >
        Confirm
      </Button>
    </div>
  );
};

export default ConfirmOtp;
