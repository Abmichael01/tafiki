
import { Order } from "@/types/admin";
import Tab from "@/components/Admin/Orders/Tab";
import { useVendor } from "@/hooks/useVendor";
import OrderCardList from "@/components/RetailShop/OrderCardList";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Orders() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentTab = searchParams.get("tab") || "ongoing";
  const { vendor, isVendorLoaded } = useVendor();

  if (!isVendorLoaded) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-red-600">Vendor information not available</p>
      </div>
    );
  }

  // Use orders from vendor store
  const orders = vendor.investments || [];

  console.log(orders)

  // Filter orders based on current tab
  const ongoingOrders = orders.filter((order: Order) => 
    order.status !== "completed"
  );
  
  const historyOrders = orders.filter((order: Order) => 
    order.status === "completed"
  );

  // Determine which orders to show based on current tab
  const displayOrders = currentTab === "history" ? historyOrders : ongoingOrders;
  const displayTitle = currentTab === "history" ? "Order History" : "Ongoing Orders";
  const displayMessage = currentTab === "history" ? "No order history" : "No ongoing orders";

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button onClick={() => navigate("/retail-shop")} className="text-xs border px-4 py-1 rounded text-gray-400 cursor-pointer hover:text-gray-600">
        Back
      </button>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Investment Orders</h1>
        <p className="text-gray-600 mt-2">Track your investment order history</p>
      </div>    

      {/* Tab Navigation */}
      <Tab />

      {/* Orders Cards */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <OrderCardList 
          orders={displayOrders}
          title={displayTitle}
          emptyMessage={displayMessage}
        />
      </div>
    </div>
  );
}
