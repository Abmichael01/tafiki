import { Order } from "@/types/admin";
import profile from "@/assets/images/userPic.webp";
import orderBox from "@/assets/svgs/orderBox.svg";
import { Link } from "react-router-dom";
// import { cn } from "@/lib/utils";

// const formatCurrency = (amount: number, currency: string) => {
//   return new Intl.NumberFormat("en-GB", {
//     style: "currency",
//     currency: currency,
//   }).format(amount);
// };

const OrderRow: React.FC<{ order: Order; status: boolean }> = ({
  order,
  status,
}) => (
  <tr className="hover:bg-gray-50 py-[10px] border-b last:border-b-0 font-satoshi">
    {/* Order ID and Date */}
    <td className=" w-full min-w-0 p-[12px] font-satoshi">
      <Link
        to="/admin/orders/2p3878423498"
        className="flex gap-2 items-center mr-5"
      >
        <img src={orderBox} alt="order-box" className="w-[40px]" />
        <div className="mr-8">
          <div className="font-[700] text-[18px]">{order.order_id}#ORDER_7474747</div>
          <div className="text-[14px] font-[500] text-[#929292]">
          {new Date(order.created_at).toLocaleDateString()}
          </div>
        </div>
      </Link>
    </td>

    {/* Partner */}
    <td className="py-3 px-4 w-full min-w-0">
      <div className="flex items-center justify-start shrink-0">
        <img
          src={profile}
          alt={order.partner_name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <span className="text-[16px] font-[700] truncate">
          {order.partner_name}
        </span>
      </div>
    </td>

    {/* Vendor */}
    <td className="py-3 px-4 w-full min-w-0">
      <div className="flex items-center justify-start shrink-0">
        <img
          src={profile}
          alt={order.vendor_name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <span className="text-[16px] font-[700] truncate">
          {order.vendor_name}
        </span>
      </div>
    </td>

    {/* Amount */}
    <td className="py-3 px-4 text-right">
      <span className="text-[16px] font-[700]">
        {/* {formatCurrency(order.total_amount, "E")} */}
        £{order.total_amount}
      </span>
    </td>

    {/* Order Details */}
    {/* {!status && (
      <td className="py-3 px-4 text-right text-[16px] font-[700]">
        <span className=" text-[16px] truncate">{order.items}</span>
      </td>
    )} */}
    {status && (
      // <td className="py-3 px-4 text-center">
      //   <span
      //     className={cn(
      //   "text-[16px] font-[700] truncate px-2 py-1 rounded",
      //   order.status === "pending"
      //     ? "bg-[#FFD60A1A] text-[#FFD60A]"
      //     : order.status === "in-transit"
      //     ? "bg-[#1C274C1A] text-[#1C274C]"
      //     : order.status === "delivered"
      //     ? "bg-[#16A34A1A] text-[#16A34A]"
      //     : order.status === "settlement pending" || order.status === "return-settled"
      //     ? "bg-[#1C274C1A] text-[#1C274C]"
      //     : "bg-gray-100 text-gray-600"
      //     )}
      //   >
      //     {order.status}
      //   </span>
      // </td>
      <p></p>
    )}
  </tr>
);

export default OrderRow;
