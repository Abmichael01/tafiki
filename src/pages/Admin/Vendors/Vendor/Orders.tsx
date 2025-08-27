import Info from "@/components/Admin/Vendors/VendorDetails/Info";
import OrdersList from "@/components/Admin/Orders/OrdersList/OrdersList";
import Tab from "@/components/Admin/Orders/Tab";
import { useSearchParams, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { getVendor } from "@/api/adminEndpoints";
import { VendorDetails as VendorDetailsType } from "@/types/admin";
import PageTitle from "@/components/ui/PageTitle";

export default function Orders() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const currentTab = params.get("tab") || "ongoing";

  const { data, isLoading } = useQuery<VendorDetailsType>({
    queryKey: ["vendor", id],
    queryFn: () => getVendor(id as string),
  });

  // Filter orders based on status for ongoing vs history
  const allOrders = data?.vendor_details?.recent_orders || [];
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

  console.log("Orders data:", data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-[24px]">
      <PageTitle
        title="Orders"
        subtitle={data?.vendor_details?.store_name}
        showBack={true}
        backLink={`/admin/vendors/${id}`}
      />
      <Info data={data?.vendor_details} />
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
