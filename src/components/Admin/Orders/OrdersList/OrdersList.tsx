import { Order } from "@/types/admin";
import React from "react";
import OrderRow from "./OrderRow";
import orderBox from "@/assets/svgs/orderBox2.svg";
import history from "@/assets/svgs/history.svg";

interface OrderListProps {
  orders: Order[];
  tab?: string;
  status?: boolean;
}

// Helper function to group orders by date for history view
const groupOrdersByDate = (orders: Order[]) => {
  const groups: { [key: string]: Order[] } = {};

  orders?.forEach((order) => {
    const date = order.created_at || "Unknown";
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(order);
  });

  return groups;
};

// Helper function to format currency

// Individual order row component

// Main OrderList component
const OrderList: React.FC<OrderListProps> = ({ orders, tab, status }) => {
  const renderOngoingOrders = () =>
    orders?.length > 0 ? (
      orders?.map((order) => <OrderRow key={order.id} order={order} status={status as boolean} />)
    ) : (
      <tr>
        <td colSpan={5} className="h-[60vh] text-center text-gray-500">
          <div className="flex flex-col gap-[4px] justify-center items-center">
            <img src={orderBox} alt="" className="size-[80px]" />
            <h3 className="text-[#929292] font-[700] font-satoshi">
              There is no ongoing order
            </h3>
          </div>
        </td>
      </tr>
    );

  const renderHistoryOrders = () => {
    const groupedOrders = groupOrdersByDate(orders);

    if (Object.keys(groupedOrders)?.length === 0) {
      return (
        <tr>
          <td colSpan={5} className="h-[60vh] text-center text-gray-500">
            <div className="flex flex-col gap-[4px] justify-center items-center">
              <img src={history} alt="" className="size-[80px]" />
              <h3 className="text-[#929292] font-[700] font-satoshi">
                There is no order history
              </h3>
            </div>
          </td>
        </tr>
      );
    }

    return Object?.entries(groupedOrders).flatMap(([date, dateOrders]) => [
      // Date header row
      <tr key={`header-${date}`}>
        <td
          colSpan={5}
          className="py-[8px] text-[#929292] text-[18px] font-[600]"
        >
          {date}
        </td>
      </tr>,
      // Rows under that date
      ...dateOrders.map((order) => <OrderRow key={order.id} order={order} status={status as boolean} />),
    ]);
  };

  return (
    <div className="overflow-x-auto overflow-hidden">
      <table className="space-y-3 w-full text-nowrap overflow-x-auto overflow-hidden">
        <thead className="bg-[#F9F9F9] w-full">
          <tr className="text-[#6E6E6E] text-[16px] font-[500] text-center w-full">
            <td className="p-[8px]">Order ID and Date</td>
            <td className="">By: Partner</td>
            <td className="">To: Vendor</td>
            <td className="">Amount</td>
            <td className="">Order Details</td>
          </tr>
        </thead>
        <tbody>
          {tab === "history" ? renderHistoryOrders() : renderOngoingOrders()}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
