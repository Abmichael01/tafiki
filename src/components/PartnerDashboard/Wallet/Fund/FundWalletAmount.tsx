import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FundWalletAmount: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e: React.FormEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.textContent || "";
    setAmount(value);
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
          onClick={() => {
            navigate(
              `${location.pathname}?dialog=fundWallet&dialogCurrent=payment-method&amount=${amount}`
            );
          }}
          className="w-full"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FundWalletAmount;
