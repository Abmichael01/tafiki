import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { FiUpload } from "react-icons/fi";
import OverviewCard from "@/components/PartnerDashboard/Portfolio/OverviewCard";
import MyOrders from "@/components/PartnerDashboard/Portfolio/MyOrders";
import History from "@/components/PartnerDashboard/Portfolio/History";
import SelectPage from "@/components/PartnerDashboard/Portfolio/SelectPage";
import { useDialogStore } from "@/stores/dialogStore";
import useUserDetailsStore from "@/stores/userStore";
import { format } from 'date-fns';
import { Transaction } from '@/types';


const PortfolioDetail: React.FC = () => {
  const { openDialog } = useDialogStore()
  const { userDetails } = useUserDetailsStore()

  const formatTransactions = (): Transaction[] => {
    if (!userDetails?.roi_over_time) return [];

    return userDetails.roi_over_time?.map(roi => ({
      type: "Remittance Inflow",
      time: format(new Date(roi.date), "H:mma, do MMM. yyyy"),
      amount: `+£${roi.total.toFixed(2)}`
    }));
  };

  const transactions = formatTransactions();

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/portfolio">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Portfolio</h1>
        </div>
        <SelectPage />
      </div>
      <div className="flex justify-center">
        <OverviewCard className="w-full md:w-[698px]">
          <h1 className="text-[#FFFFFFCC] text-[14px] text-center">Balance</h1>
          <div className="text-center font-satoshi">
            <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
              {" "}
              <span className=" text-[18px] text-[#FFFFFF99]">£</span> {userDetails?.total_roi_paid}
            </h1>
            <h1 className="text-[12px]">
              {" "}
              <span className="text-[#16A34A]">(+{((userDetails?.daily_roi || 0) / (userDetails?.total_roi_paid || 1) * 100).toFixed(2)}%)</span>(+£{userDetails?.daily_roi}) Today
            </h1>
          </div>
          <div onClick={() => openDialog("withdrawFromPortfolio")} className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
            <FiUpload className="size-[15px]" />
            <h1 className="text-[12px]">Withdraw</h1>
          </div>
        </OverviewCard>
      </div>
      <MyOrders pending />
      <History heading="Expected ROI Over Time" data={transactions} />
    </div>
  );
};

export default PortfolioDetail;
