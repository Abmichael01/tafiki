import orderIcon from "@/assets/svgs/orderBox.svg";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";
import { Order } from "@/types/admin";
import { formatDisplayTime } from "@/lib/formatDateTime";
import { cn } from "@/lib/utils";
import history from "@/assets/svgs/history.svg";

// Status badge color mapping for clarity and maintainability

interface RecentOrdersProps {
  status?: boolean;
  link?: string;
  data: Order[];
  showPartner?: boolean; // true to show partner name instead of vendor name
}

/**
 * RecentOrders component
 * @param status - if true, show Status column instead of Order details
 */
const RecentOrders: React.FC<RecentOrdersProps> = ({
  status = false,
  link = "/admin/orders",
  data,
  showPartner = false,
}) => {
  return (
    <div className="bg-white text-sm overflow-hidden font-satoshi">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        {status ? (
          <h2 className="font-semibold text-[20px]">Orders</h2>
        ) : (
          <h2 className="font-semibold text-[20px]">Recent Orders</h2>
        )}
        {data.length !== 0 && (
          <Link
            to={link}
            className="text-[14px] text-gray-500 hover:underline flex items-center gap-1"
          >
            View all <ChevronRightIcon className="size-[16px] text-[#6E6E6E]" />
          </Link>
        )}
      </div>

      {/* Table */}
      {data.length !== 0 && (
        <div className="overflow-x-auto border-none fancy-scrollbar">
          <table className="min-w-full table-auto border-none text-left text-nowrap">
            <thead>
              <tr className="text-[16px] text-[#6E6E6E] bg-[#F9F9F9] font-medium ">
                <th className="px-4 py-2 text-center">Order ID and Date</th>
                <th className="px-4 py-2">To: {showPartner ? "Partner" : "Vendor"}</th>
                <th className="px-4 py-2 text-center">Amount</th>
                {!status && <th className="px-4 py-2">Order details</th>}
                {status && <th className="px-4 py-2">Status</th>}
              </tr>
            </thead>
            <tbody>
              {data?.map((order, idx) => (
                <tr key={idx} className="border-b border-[#F0F0F0]">
                  {/* Order ID and Date */}
                  <td className="px-4 py-3">
                    <Link
                      to={`/admin/orders/${order.order_id}`}
                      className="flex items-start gap-2 mr-10"
                    >
                      <img
                        src={orderIcon}
                        className="size-[33.3px] text-gray-500 mt-1"
                        alt=""
                      />
                      <div>
                        <div className="font-bold text-[18px]">
                          Order {order.order_id}
                        </div>
                        <div className="text-[14px] text-gray-500">
                          {formatDisplayTime(order.created_at)}
                        </div>
                      </div>
                    </Link>
                  </td>

                  {/* Vendor or Partner */}
                  <td className="px-4 py-3 text-">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                          className="size-[36px]"
                        />
                        <AvatarFallback className="size-[36px]">
                          {getInitials(showPartner ? order.partner_name : order.vendor_name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-[16px] font-[700]">
                        {showPartner ? order.partner_name : order.vendor_name}
                      </span>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="px-4 py-3 font-bold text-[18px] text-center">
                    ${order.amount?.toLocaleString("en-GB")}
                  </td>

                  {/* Order Details or Status */}
                  <td className="px-4 py-3 text-[16px] text-center font-[700]">
                    {!status ? (
                      order?.products?.map((prod) => (
                        <span>{prod}</span>
                      ))
                    ) : (
                      <span
                        className={cn(
                          `inline-block px-3 py-1 rounded-[6px] text-[14px] font-medium`,
                          order.status === "pending"
                            ? ""
                            : order.status === "completed"
                            ? ""
                            : ""
                        )}
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
      )}
      {data.length === 0 && (
        <div className="flex flex-col gap-[4px] justify-center items-center py-10">
          <img src={history} alt="" className="size-[40px] md:size-[60px]" />
          <h3 className="text-[#929292] font-[700] font-satoshi">
            There is no order history
          </h3>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
