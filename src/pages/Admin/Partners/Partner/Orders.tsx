import Info from "@/components/Admin/Partners/PartnerDetails/Info";
import OrdersList from "@/components/Admin/Orders/OrdersList/OrdersList";
import Tab from "@/components/Admin/Orders/Tab";
import { useSearchParams, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import PageTitle from "@/components/ui/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { getPartner } from "@/api/adminEndpoints";
import LoadingData from "@/components/Admin/LoadingData";
import { Partner } from "@/types/admin";

export default function Orders() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const currentTab = params.get("tab") || "ongoing";

  const { data, isLoading } = useQuery({
    queryKey: ["partner", id],
    queryFn: () => getPartner(id as string),
  });

  // Filter orders based on status for ongoing vs history
  const allOrders = data?.orders || [];
  const ongoingOrders = allOrders.filter(
    (order) =>
      order.status === "pending" ||
      order.status === "processing" ||
      order.status === "confirmed" ||
      order.status === "in-transit"
  );
  const historyOrders = allOrders.filter(
    (order) =>
      order.status === "completed" ||
      order.status === "cancelled" ||
      order.status === "delivered"
  );

  console.log("Partner Orders data:", data);

  if (isLoading) {
    return <LoadingData />;
  }

  return (
    <div className="space-y-[24px]">
      <PageTitle
        title="Partners"
        subtitle={data?.partner?.name}
        showBack={true}
        backLink={`/admin/partners/${id}`}
      />
      <Info data={data?.partner as Partner} />
      <Separator />
      <div className="space-y-[24px]">
        <Tab />
        {currentTab === "ongoing" && (
          <OrdersList orders={ongoingOrders} tab="ongoing" status={true} />
        )}
        {currentTab === "history" && (
          <OrdersList orders={historyOrders} tab="history" status={true} />
        )}
      </div>
    </div>
  );
}
