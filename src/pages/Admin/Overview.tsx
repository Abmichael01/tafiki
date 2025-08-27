import { getOverview } from "@/api/adminEndpoints";
import LoadingData from "@/components/Admin/LoadingData";
import Cards from "@/components/Admin/Overview/Cards";
import RecentOrders from "@/components/Admin/Overview/RecentOrders";
import RemittanceInflow from "@/components/Admin/Overview/RemittanceInflow";
import WithdrawalRequests from "@/components/Admin/Partners/WithdrawalRequest/WithdrawalRequest";
import { Order, WithdrawalData } from "@/types/admin";
import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";

export default function Overview() {
  const { data, isLoading } = useQuery({
    queryKey: ["overview"],
    queryFn: getOverview,
  });

  console.log(data)

  if(isLoading) return <LoadingData />

  return (
    <div className="space-y-10">
      <h1 className="text-[20px] ">
        Welcome, <span className="font-semibold">Admin</span>{" "}
      </h1>
      <Cards
        todays_remittance={data?.todays_remittance}
        total_balance={data?.total_balance}
        pending_withdrawals={data?.pending_withdrawals}
      />
      <RecentOrders data={data?.recent_orders as Order[]} />
      <RemittanceInflow remittanceHistory={data?.remittance_history || []} />
      <WithdrawalRequests data={data?.withdrawal_request as WithdrawalData[]} />
    </div>
  );
}
