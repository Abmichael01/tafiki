import Cards from "@/components/Admin/Overview/Cards";
import RecentOrders from "@/components/Admin/Overview/RecentOrders";
import RemittanceInflow from "@/components/Admin/Overview/RemittanceInflow";
import WithdrawalRequests from "@/components/Admin/Partners/WithdrawalRequest/WithdrawalRequest";




export default function Overview() {
  return (
    <div className="space-y-10">
      <h1 className="text-[20px] ">
        Welcome, <span className="font-semibold">Admin</span>{" "}
      </h1>
      <Cards />
      <RecentOrders />
      {/* <History heading="Remittance Inflow" data={dummyRemittanceData} /> */}
      <RemittanceInflow />
      <WithdrawalRequests />
    </div>
  )
}
