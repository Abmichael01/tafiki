import DeliveryTo from "@/components/Admin/Orders/DeliveryTo";
import PartnerReturns from "@/components/Admin/Orders/PartnerReturns";
import Timeline from "@/components/Admin/Orders/TimeLine";
import Overview from "@/components/PartnerDashboard/MyOrders/OrderDetails/Overview";
import Products from "@/components/PartnerDashboard/MyOrders/OrderDetails/Products";
import React from "react";
import PageTitle from "@/components/ui/PageTitle";

const OrderDetails: React.FC = () => {
  return (
    <div className="space-y-10">
      <PageTitle 
        title="Order details" 
        showBack={true}
      />
      <Overview admin />
      <Timeline />
      <Products  />
      <DeliveryTo />
      <PartnerReturns />
    </div>
  );
};

export default OrderDetails;
