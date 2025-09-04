import { Button } from "@/components/ui/button";
import { useCloseDialog } from "@/hooks/closeDialog";
import React from "react";
import { FaMoneyBill } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

const ProcessingWithdrawal: React.FC = () => {
    const close = useCloseDialog("withdrawFromPortfolio")
    const [params] = useSearchParams()
    const amount = params.get("amount")
  return (
    <div className="">
      <div className="flex flex-col items-center text-center gap-[14px]">
        <FaMoneyBill className="fill-[#157811] size-[95.58px]" />
        <h1 className="text-[24px] font-[600]">Withdrawal processing</h1>
        <p className="text-[24px] font-[500] font-satoshi">
          Your withdrawal request of ${amount} is being processed
        </p>
      </div>
      <Button onClick={close} className="w-full bg-[#15221B] mt-[60px]">Done</Button>
    </div>
  );
};

export default ProcessingWithdrawal;
