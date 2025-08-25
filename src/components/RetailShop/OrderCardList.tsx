import React from "react";
import { Order } from "@/types/admin";
import OrderCard from "./OrderCard";
import { Package } from "lucide-react";

interface OrderCardListProps {
  orders: Order[];
  title?: string;
  emptyMessage?: string;
}

const OrderCardList: React.FC<OrderCardListProps> = ({ 
  orders, 
  title = "Orders", 
  emptyMessage = "No orders found" 
}) => {
  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Package className="h-16 w-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-500 mb-2">{title}</h3>
        <p className="text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <span className="text-sm text-gray-500">
          {orders.length} order{orders.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderCardList;
