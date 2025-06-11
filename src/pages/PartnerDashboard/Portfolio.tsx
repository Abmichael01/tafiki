import History from "@/components/PartnerDashboard/Portfolio/History";
import MyOrders from "@/components/PartnerDashboard/Portfolio/MyOrders";
import Overview from "@/components/PartnerDashboard/Portfolio/Overview";
import useUserDetailsStore from "@/stores/userStore";
import { Transaction } from "@/types";
import { format } from "date-fns";
import React from "react";

const Portfolio: React.FC = () => {
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
      <h1 className="text-[20px] ">
        Welcome, <span className="font-[600] uppercase">{userDetails?.personal_details.username}</span>{" "}
      </h1>
      <Overview />
      <MyOrders />
      <History heading="Activity" data={transactions} />
    </div>
  );
};

export default Portfolio;
