import Info from "@/components/Admin/Vendors/VendorDetails/Info";
import OrdersList from "@/components/Admin/Orders/OrdersList/OrdersList";
import Tab from "@/components/Admin/Orders/Tab";
import { useSearchParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/adminEndpoints";
import { Order } from "@/types/admin";

export default function Orders() {
    const [params] = useSearchParams();
    const currentTab = params.get("tab") || "ongoing";
    const { data } = useQuery({
        queryKey: ["orders"],
        queryFn: getOrders
    })
    console.log("Orders data:", data);
    return (
        <div className="space-y-[24px]">
            <Info />
            <Separator />
            <div className="space-y-[24px]">
                <Tab />
                {currentTab === "ongoing" && <OrdersList orders={data?.results as Order[]} tab="ongoing" status={true} />}
                {currentTab === "history" && <OrdersList orders={data?.results as Order[]} tab="history" status={true} />}
            </div>
        </div>
    );
}
