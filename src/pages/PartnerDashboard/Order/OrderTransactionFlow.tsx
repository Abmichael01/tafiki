import Overview from "@/components/PartnerDashboard/MyOrders/OrderDetails/Overview";
import Products from "@/components/PartnerDashboard/MyOrders/OrderDetails/Products";
import History from "@/components/PartnerDashboard/Portfolio/History";
import useUserDetailsStore from "@/stores/userStore";
import { Transaction } from "@/types";
import { format } from "date-fns";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";


const OrderTransactionFlow: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { userDetails } = useUserDetailsStore();
  const order = userDetails?.investment_summary.find(
    (order) => order.order_id === id
  );

  const formatTransactions = (): Transaction[] => {
    if (!order?.payout_schedule) return [];

    return order?.payout_schedule.map((pay) => ({
      type: "Remittance Inflow",
      time: format(new Date(pay.payout_date), "H:mma, do MMM. yyyy"),
      amount: `+£${pay.amount.toFixed(2)}`,
    }));
  };

  const transactions = formatTransactions()
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to={`/partner/my-orders/${id}`}>
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">
            Order details
            <span className=" text-[16px] text-[#929292]">
              /RI flow
            </span>
          </h1>
        </div>
      </div>
      <Overview />
      <Products transactionsPage />
      <History heading="Expected RI Over Time" data={transactions} />
    </div>
  );
};

export default OrderTransactionFlow;
