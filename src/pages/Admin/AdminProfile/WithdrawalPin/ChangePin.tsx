import ConfirmOtp from "@/components/PartnerDashboard/Profile/WithdrawalPin/ConfirmOtp";
import EnterPin from "@/components/PartnerDashboard/Profile/WithdrawalPin/EnterPin";
import Success from "@/components/PartnerDashboard/Profile/WithdrawalPin/Success";
import useUserDetailsStore from "@/stores/userStore";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useSearchParams } from "react-router-dom";




const ChangePin: React.FC = () => {
  const [ params ] = useSearchParams();
  const current = params.get("current") || "enterPin";
  const { userDetails } = useUserDetailsStore()  
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/admin/profile/withdrawal-pin">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[20px] sm:text-[24px]">{userDetails?.has_pin ? "Reset" : "Set"} Withdrawal PIN</h1>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" w-full md:w-[698px]">
          {current === "enterPin" &&  <EnterPin /> }
          {current === "confirmOtp" && <ConfirmOtp  /> }
          {current === "success" && <Success /> }
        </div>
      </div>
    </div>
  );
};

export default ChangePin;
