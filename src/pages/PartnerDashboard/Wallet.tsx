import OverviewCard from "@/components/PartnerDashboard/Portfolio/OverviewCard";
import SelectPage from "@/components/PartnerDashboard/Portfolio/SelectPage";
import { Separator } from "@/components/ui/separator";
import { useDialogStore } from "@/stores/dialogStore";
import useUserDetailsStore from "@/stores/userStore";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import Activities from "@/components/PartnerDashboard/Wallet/Activities";


const Wallet: React.FC = () => {
  const { openDialog } = useDialogStore();
  const { userDetails } = useUserDetailsStore()
 
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/portfolio">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Wallet</h1>
        </div>
        <SelectPage />
      </div>
      <div className="flex justify-center">
        <OverviewCard className=" w-full md:w-[698px] bg-[#004a00] ">
          <h1 className="text-[#FFFFFFCC] text-[14px] text-center">Balance</h1>
          <div className="text-center font-satoshi">
            <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
              {" "}
              <span className=" text-[18px] text-[#FFFFFF99]">£</span> {userDetails?.wallet_balance}
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 justify-center gap-[20px] w-[50%]">
            <div 
            onClick={() => openDialog("withdrawFromWallet")}
            className="text-center flex flex-col py-[4px] gap-[2px] items-center float-right cursor-pointer">
                    <FiUpload className="size-[15px]" />
                    <h1 className="text-[12px]">Withdraw</h1>
                  </div>
              <div className="flex justify-center">
                <Separator orientation="vertical" className="h-[75%]" />
              </div>
              <div 
              onClick={() => openDialog("fundWallet")}
              className="text-center flex flex-col py-[4px]  gap-[2px] items-center cursor-pointer">
                <FaPlus className="size-[15px]" />
                <h1 className="text-[12px]">Fund</h1>
              </div>
            </div>
          </div>
        </OverviewCard>
      </div>
      <Activities title="Transactions" />
    </div>
  );
};

export default Wallet;
