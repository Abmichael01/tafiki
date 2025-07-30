import orderIcon from "@/assets/svgs/orderBox.svg";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// Status badge color mapping for clarity and maintainability
const statusStyles: Record<
  string,
  { bg: string; text: string }
> = {
  Pending: {
    bg: "bg-[#FFD60A1A]",
    text: "text-[##FFD60A]",
  },
  "In-Transit": {
    bg: "bg-[#1C274C1A]",
    text: "text-[#1C274C]",
  },
  Delivered: {
    bg: "bg-[#16A34A1A]",
    text: "text-[#16A34A]",
  },
  "Settlement pending": {
    bg: "bg-[#B522171A]",
    text: "text-[#1C274C]",
  },
};

const orders = [
  {
    id: "#5210",
    time: "17:56",
    date: "21st Jan., 2025",
    partnerName: "John Doe",
    vendorName: "Kapac Ventures",
    amount: "£12,300",
    status: "Pending",
    details: "5 units of Rice, 2 units of...",
    partnerAvatar: "https://i.pravatar.cc/40?img=1",
    vendorAvatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "#5210",
    time: "17:56",
    date: "21st Jan., 2025",
    partnerName: "John Doe",
    vendorName: "Kapac Ventures",
    amount: "£12,300",
    status: "In-Transit",
    details: "5 units of Rice, 2 units of...",
    partnerAvatar: "https://i.pravatar.cc/40?img=1",
    vendorAvatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "#5210",
    time: "17:56",
    date: "21st Jan., 2025",
    partnerName: "John Doe",
    vendorName: "Kapac Ventures",
    amount: "£12,300",
    status: "Delivered",
    details: "5 units of Rice, 2 units of...",
    partnerAvatar: "https://i.pravatar.cc/40?img=1",
    vendorAvatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: "#5210",
    time: "17:56",
    date: "21st Jan., 2025",
    partnerName: "John Doe",
    vendorName: "Kapac Ventures",
    amount: "£12,300",
    status: "Settlement pending",
    details: "5 units of Rice, 2 units of...",
    partnerAvatar: "https://i.pravatar.cc/40?img=1",
    vendorAvatar: "https://i.pravatar.cc/40?img=2",
  },
];

interface RecentOrdersProps {
  status?: boolean;
  link?: string;
}

/**
 * RecentOrders component
 * @param status - if true, show Status column instead of Order details
 */
const RecentOrders: React.FC<RecentOrdersProps> = ({ status = false, link = "/admin/orders" }) => {
  return (
    <div className="bg-white text-sm overflow-hidden font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        {status ? <h2 className="font-semibold text-[20px]">Orders</h2> : <h2 className="font-semibold text-[20px]">Recent Orders</h2>}
        <Link  to={link} className="text-[14px] text-gray-500 hover:underline flex items-center gap-1">
          View all <ChevronRightIcon className="size-[16px] text-[#6E6E6E]" />
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border-none">
        <table className="min-w-full table-auto border-none text-left text-nowrap">
          <thead>
            <tr className="text-[16px] text-[#6E6E6E] bg-[#F9F9F9] font-medium text-center">
              <th className="px-4 py-2">Order ID and Date</th>
              {/* Partner column removed per screenshot */}
              <th className="px-4 py-2">To: Vendor</th>
              <th className="px-4 py-2">Amount</th>
              {!status && <th className="px-4 py-2">Order details</th>}
              {status && <th className="px-4 py-2">Status</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-b border-[#F0F0F0]">
                {/* Order ID and Date */}
                <td className="px-4 py-3">
                  <div className="flex items-start gap-2 mr-10">
                    <img
                      src={orderIcon}
                      className="size-[33.3px] text-gray-500 mt-1"
                      alt=""
                    />
                    <div>
                      <div className="font-bold text-[18px]">
                        Order {order.id}
                      </div>
                      <div className="text-[14px] text-gray-500">
                        {order.time}, {order.date}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Vendor */}
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src={order.vendorAvatar}
                      alt="Vendor"
                      className="size-[24px] rounded-full object-cover"
                    />
                    <span className="text-[16px]">{order.vendorName}</span>
                  </div>
                </td>

                {/* Amount */}
                <td className="px-4 py-3 font-bold text-[18px] text-center">
                  {order.amount}
                </td>

                {/* Order Details or Status */}
                <td className="px-4 py-3 text-[16px] text-center">
                  {!status ? (
                    order.details
                  ) : (
                    <span
                      className={`inline-block px-3 py-1 rounded-[6px] text-[14px] font-medium ${
                        statusStyles[order.status]?.bg || "bg-gray-100"
                      } ${statusStyles[order.status]?.text || "text-gray-500"} text-nowrap`}
                    >
                      {order.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
