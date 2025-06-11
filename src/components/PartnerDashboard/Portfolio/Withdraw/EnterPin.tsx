import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";


const otpSlotClassName = "h-12 w-12 text-[32px] data-[active=true]:ring-[0px]  first:rounded-l-none first:border-l-0 last:rounded-r-none border-0 shadow-none  border-b-2 border-[#444] data-[active=true]:border-[#494949]"
  

const EnterPin: React.FC = () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const amount = params.get("amount")
  return (
    <div className="mt-[24px] space-y-[60px]">
      <div className="space-y-[24px] font-satoshi flex flex-col items-center">
        <h1 className="font-[500] text-[16px]">Enter withdrawal PIN</h1>
        <InputOTP maxLength={6} >
          <InputOTPGroup className="flex gap-2" >
            <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
            <InputOTPSlot index={1} className={otpSlotClassName} />
            <InputOTPSlot index={2} className={otpSlotClassName} />
            <InputOTPSlot index={3} className={otpSlotClassName} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button onClick={() => navigate(`/partner/portfolio/portfolio?dialog=walletWithdrawal&dialogCurrent=processing&amount=${amount}`)} className="w-full bg-[#15221B]">Withdraw</Button>
    </div>
  );
};

export default EnterPin;
