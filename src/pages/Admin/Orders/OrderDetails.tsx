import DeliveryTo from "@/components/Admin/Orders/OrderDetails/DeliveryTo";
import PartnerReturns from "@/components/Admin/Orders/OrderDetails/PartnerReturns";
import Timeline from "@/components/Admin/Orders/OrderDetails/TimeLine";
import React from "react";
import PageTitle from "@/components/ui/PageTitle";
import Products from "@/components/Admin/Orders/OrderDetails/Products";
import Overview from "@/components/Admin/Orders/OrderDetails/Overview";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@/api/adminEndpoints";
import { Order, RoiCycle } from "@/types/admin";
import LoadingData from "@/components/Admin/LoadingData";

const OrderDetails: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id as string),
  });

  console.log(data);

  if(isLoading) return <LoadingData /> 

  return (
    <div className="space-y-10">
      <PageTitle title="Order details" showBack={true} />
      <Overview data={data as Order} />
      <Timeline status={data?.status as string} />
      <Products products={data?.products as string[]} />
      <DeliveryTo avatarSrc={data?.vendor_picture} companyName={data?.vendor_name} address={data?.vendor_address} />
      <PartnerReturns roiData={data?.roi_cycles as RoiCycle[]} roiPercentage={data?.roi_rate as number}  />
    </div>
  );
};

export default OrderDetails;
