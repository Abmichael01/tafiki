import MyOrders from "@/components/PartnerDashboard/Portfolio/MyOrders";
import Overview from "@/components/PartnerDashboard/Portfolio/Overview";
import Activities from "@/components/PartnerDashboard/Wallet/Activities";
import useUserDetailsStore from "@/stores/userStore";
import React from "react";

const Portfolio: React.FC = () => {
  const { userDetails } = useUserDetailsStore()

  
  return (
    <div className="space-y-10">
      <h1 className="text-[20px] ">
        Welcome, <span className="font-[600] uppercase">{userDetails?.personal_details.username}</span>{" "}
      </h1>
      <Overview />
      <MyOrders />
      <Activities title="Transaction Summary" />
    </div>
  );
};

export default Portfolio;
