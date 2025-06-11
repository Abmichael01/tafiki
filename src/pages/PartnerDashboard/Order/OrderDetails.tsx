import Overview from "@/components/PartnerDashboard/MyOrders/OrderDetails/Overview";
import Products from "@/components/PartnerDashboard/MyOrders/OrderDetails/Products";
import Timeline from "@/components/PartnerDashboard/MyOrders/OrderDetails/Timeline";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";



const OrderDetails: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/portfolio">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Order details</h1>
        </div>
      </div>
      <Overview />
      <Products  />
      <Timeline />
    </div>
  );
};

export default OrderDetails;
