import ConfirmOtp from "@/components/PartnerDashboard/Profile/ResetPassword/ConfirmOtp";
import EnterPassword from "@/components/PartnerDashboard/Profile/ResetPassword/EnterPassword";
import ResetSuccess from "@/components/PartnerDashboard/Profile/ResetPassword/ResetSuccess";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useSearchParams } from "react-router-dom";




const ResetPassword: React.FC = () => {
  const [ params ] = useSearchParams();
  const current = params.get("current") || "enterPassword";
  
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[20px] sm:text-[24px]">Reset Login Password</h1>
        </div>
      </div> 
      <div className=" flex justify-center">
        <div className=" w-full md:w-[698px]">
          {current === "enterPassword" &&  <EnterPassword /> }
          {current === "confirmOtp" && <ConfirmOtp  /> }
          {current === "resetSuccess" && <ResetSuccess /> }
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
