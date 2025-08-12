import DeliveryTo from "@/components/Admin/Orders/OrderDetails/DeliveryTo";
import PartnerReturns from "@/components/Admin/Orders/OrderDetails/PartnerReturns";
import Timeline from "@/components/Admin/Orders/OrderDetails/TimeLine";
import React from "react";
import PageTitle from "@/components/ui/PageTitle";
import Products from "@/components/Admin/Orders/OrderDetails/Products";
import Overview from "@/components/Admin/Orders/OrderDetails/Overview";

const OrderDetails: React.FC = () => {
  return (
    <div className="space-y-10">
      <PageTitle 
        title="Order details" 
        showBack={true}
      />
      <Overview />
      <Timeline />
      <Products  />
      <DeliveryTo />
      <PartnerReturns />
    </div>
  );
};

export default OrderDetails;
