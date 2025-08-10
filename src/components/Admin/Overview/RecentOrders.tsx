import { getOrders } from "@/api/adminEndpoints";
import orderIcon from "@/assets/svgs/orderBox.svg";
import { useQuery } from "@tanstack/react-query";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// Status badge color mapping for clarity and maintainability

interface RecentOrdersProps {
  status?: boolean;
  link?: string;
}

/**
 * RecentOrders component
 * @param status - if true, show Status column instead of Order details
 */
const RecentOrders: React.FC<RecentOrdersProps> = ({ status = false, link = "/admin/orders" }) => {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders
  })

  console.log(data) 
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
            {data?.results?.map((order, idx) => (
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
                         {order.created_at}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Vendor */}
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src={order.vendor_name}
                      alt="Vendor"
                      className="size-[24px] rounded-full object-cover"
                    />
                    <span className="text-[16px]">{order.vendor_name}</span>
                  </div>
                </td>

                {/* Amount */}
                <td className="px-4 py-3 font-bold text-[18px] text-center">
                  {order.total_amount}
                </td>

                {/* Order Details or Status */}
                <td className="px-4 py-3 text-[16px] text-center">
                  {/* {!status ? (
                    order.details
                  ) : (
                    <span
                      className={`inline-block px-3 py-1 rounded-[6px] text-[14px] font-medium ${
                        statusStyles[order.status]?.bg || "bg-gray-100"
                      } ${statusStyles[order.status]?.text || "text-gray-500"} text-nowrap`}
                    >
                      {order.status}
                    </span>
                  )} */}
                  Detais of the prder
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
