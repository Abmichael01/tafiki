import { Button } from "@/components/ui/button";
import React from "react";

const FundByCard: React.FC = () => {
  return (
    <div className="font-satoshi space-y-[16px]">
      <h1 className="text-[16px] font-[400]">
        Enter your card details to fund your account
      </h1>
      <div className="space-y-[12px] text-[20px] mt-[16px]">
        <div className="gap-y-[8px] flex flex-col">
          <label htmlFor="card-number" className="font-[500] text-[14px]">
            Card number
          </label>
          <input
            id="card-number"
            type="text"
            className="dialog-input"
            placeholder="xxxx xxxx xxxx"
          />
        </div>
        <div className="flex gap-x-4">
          <div className="flex flex-col flex-1 gap-y-2">
            <label htmlFor="expiry-date" className="font-[500] text-[14px]">
              Expiry Date
            </label>
            <input
              id="expiry-date"
              type="text"
              placeholder="mm/yy"
              className="dialog-input"
            />
          </div>
          <div className="flex flex-col flex-1 gap-y-2">
            <label htmlFor="cvv" className="font-[500] text-[14px]">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="***"
              className="dialog-input"
            />
          </div>
        </div>
      </div>
      <Button className="w-full mt-[28px]">Next</Button>
    </div>
  );
};

export default FundByCard;
