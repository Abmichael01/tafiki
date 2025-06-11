import AddBeneficiary from "@/components/PartnerDashboard/Profile/Beneficiary/AddBeneficiary";
import ConfirmBeneficiary from "@/components/PartnerDashboard/Profile/Beneficiary/ConfirmBeneficiary";
import ConfirmSuccess from "@/components/PartnerDashboard/Profile/Beneficiary/ConfirmSuccess";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useSearchParams } from "react-router-dom";


const NewBeneficiary: React.FC = () => {
    const [params] = useSearchParams();
    const current = params.get("current") || "addBeneficiary";

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile/beneficiary">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">New Beneficiary</h1>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="w-full md:w-[698px]">
            {current === "addBeneficiary" && <AddBeneficiary /> }
            {current === "confirmBeneficiary" && <ConfirmBeneficiary /> }
            {current === "success" && <ConfirmSuccess /> }
        </div>
      </div>
    </div>
  );
};

export default NewBeneficiary;
