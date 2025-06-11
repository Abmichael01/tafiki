import { Button } from "@/components/ui/button";
import useWithdrawalStore from "@/stores/useWithdrawalStore";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const WithdrawalAmount: React.FC = () => {
  const { updateWithdrawal, withdrawal } = useWithdrawalStore()
  const [amount, setAmount] = React.useState<number | undefined>(withdrawal.amount !== 0 ? withdrawal.amount : undefined);
  return (
    <div>
      <div className="flex items-center flex-col gap-[2px]">
        <div className="flex gap-1 items-center p-[8px] bg-[#F0F0F0] rounded-full">
          <FaUserCircle className="size-[16.66px]" />
          <h1 className="text-[14px] font-[600]">{withdrawal.to.name}</h1>
        </div>
        <p className="text-[12px] font-satoshi font-[500] text-[#6E6E6E]">
          {withdrawal.to.account_number} | {withdrawal.to.bank_name}
        </p>
      </div>
      <div className="font-satoshi space-y-[60px]">
        <div className="space-y-[8px]">
          <p className="">Amount</p>
          <div className="px-[16px] bg-[#F0F0F0] rounded-[12px] w-full text-[18px] flex items-center">
            <span className="font-[500] text-[#929292]">£</span>
            <input
              value={amount}
              type="number"
              className="w-full px-[12px] py-[10px] outline-none"
              placeholder="0.00"
              onChange={(e) => {
                const value = e.target.value;
                const numericValue = parseFloat(value);
                setAmount(numericValue);
              }}
            />
          </div>
        </div>
        <Link
          to="?dialog=walletWithdrawal&dialogCurrent=enterPin"
          className="w-full"
          onClick={() => {
            if (amount) {
              updateWithdrawal({
                amount: amount,
              });
            }
          }}
        >
          <Button className="w-full">Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default WithdrawalAmount;
