import Info from "@/components/Admin/Partners/PartnerDetails/Info";
import OrdersList from "@/components/Admin/Orders/OrdersList/OrdersList";
import { historyOrders, ongoingOrders } from "@/components/Admin/Orders/OrdersList/mockData";
import Tab from "@/components/Admin/Orders/Tab";
import { useSearchParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export default function Orders() {
    const [params] = useSearchParams();
    const currentTab = params.get("tab") || "ongoing";
    return (
        <div className="space-y-[24px]">
            <Info />
            <Separator />
            <div className="space-y-[24px]">
                <Tab />
                {currentTab === "ongoing" && <OrdersList orders={ongoingOrders} tab="ongoing" status={true} />}
                {currentTab === "history" && <OrdersList orders={historyOrders} tab="history" status={true} />}
            </div>
        </div>
    );
}
