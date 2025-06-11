import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmBeneficiary: React.FC = () => {
    const navigate = useNavigate();
    const confirmBeneficiary = () => {
        navigate("/partner/profile/beneficiary/new?current=success")
        // Logic to confirm beneficiary goes here
        console.log("Beneficiary confirmed");
    }
  return (
    <div className="space-y-[60px]">
      <div className="space-y-[8px] flex flex-col items-center w-full ">
        <label htmlFor="password" className="text-[14px] text-[#6E6E6E]">
        Enter password to confirm beneficiary
        </label>
        <input
          id="password"
          type="password"
          name="new-password"
          autoComplete="new-password"
          className="py-[18px] px-[20px] border border-[#6E6E6E] w-full"
          placeholder="Enter login password"
        />
      </div>
      <Button onClick={confirmBeneficiary} className="w-full">
        Next
      </Button>
    </div>
  );
};

export default ConfirmBeneficiary;
