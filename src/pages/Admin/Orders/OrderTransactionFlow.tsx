import DeliveryTo from "@/components/Admin/Orders/OrderDetails/DeliveryTo";
import PartnerReturns from "@/components/Admin/Orders/OrderDetails/PartnerReturns";
import React from "react";
import PageTitle from "@/components/ui/PageTitle";
import Products from "@/components/Admin/Orders/OrderDetails/Products";
import Overview from "@/components/Admin/Orders/OrderDetails/Overview";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@/api/adminEndpoints";
import { Order, RoiCycle } from "@/types/admin";
import { Transaction } from "@/types";
import { format } from "date-fns";
import History from "@/components/PartnerDashboard/Portfolio/History";
import LoadingData from "@/components/Admin/LoadingData";

const OrderTransactionFlow: React.FC = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id as string),
  });

  console.log(order);

  const formatTransactions = (): Transaction[] => {
    if (!order?.roi_cycles) return [];

    return order?.roi_cycles.map((pay) => ({
      type: "Remittance Inflow",
      time: format(new Date(pay.payout_date), "H:mma, do MMM. yyyy"),
      amount: `+$${pay.amount.toLocaleString('en-GB')}`,
    }));
  };

  const transactions = formatTransactions();

  if(isLoading) return <LoadingData /> 

  return (
    <div className="space-y-10">
      <PageTitle title="Order details" showBack={true} />
      <Overview data={order as Order} />
      <Products products={order?.products as string[]} transactionsPage={true} />
      <History heading="Expected RI Over Time" data={transactions} />
      <DeliveryTo data={order as Order} />
      
      <PartnerReturns
        roiData={order?.roi_cycles as RoiCycle[]}
        roiPercentage={order?.roi_rate as number}
      />
    </div>
  );
};

export default OrderTransactionFlow;
