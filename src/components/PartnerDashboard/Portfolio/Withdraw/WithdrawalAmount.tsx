import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const WithdrawalAmount: React.FC = () => {
  const [amount, setAmount] = useState<number>()
  return (
    <div className="space-y-[16px]">
      <div className="flex items-center justify-center gap-[8px]">
        <p className="text-[12px] font-satoshi font-[500] text-[#6E6E6E]">
          To: 
        </p>
        <div className="flex gap-1 items-center p-[8px] py-[4px] bg-[#F0F0F0] rounded-full">
          <Wallet className="size-[11.8px]" />
          <h1 className="text-[14px] font-[600]">Wallet</h1>
        </div>
      </div>
      <div className="font-satoshi space-y-[60px]">
        <div className="space-y-[8px]">
          <p className="">Amount</p>
          <div className="px-[16px] bg-[#F0F0F0] rounded-[12px] w-full text-[18px] flex items-center">
            <span className="font-[500] text-[#929292]">$</span>
            <input
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              type="number"
              className="w-full px-[12px] py-[10px] outline-none"
            />
          </div>
        </div>
        <Link
          to={`/partner/portfolio/portfolio?dialog=walletWithdrawal&dialogCurrent=enterPin&amount=${amount}`}
          className="w-full"
        >
          <Button className="w-full">Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default WithdrawalAmount;
