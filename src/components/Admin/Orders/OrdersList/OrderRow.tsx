import { Order } from "@/types/admin";
import profile from "@/assets/images/userPic.webp";
import orderBox from "@/assets/svgs/orderBox.svg";
import { Link } from "react-router-dom";

const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

const OrderRow: React.FC<{ order: Order }> = ({ order }) => (
  <tr className="hover:bg-gray-50 py-[10px] border-b last:border-b-0 font-satoshi">

    {/* Order ID and Date */}
    <td className=" w-full min-w-0 p-[12px] font-satoshi">
      <Link to="/admin/orders/2p3878423498" className="flex gap-2 items-center">
        <img src={orderBox} alt="order-box" className="w-[40px]" />
        <div className="">
          <div className="font-[700] text-[18px]">{order.orderNumber}</div>
          <div className="text-[14px] font-[500] text-[#929292]">{order.timestamp}</div>
        </div>
      </Link>
    </td>

    {/* Partner */}
    <td className="py-3 px-4 w-full min-w-0">
      <div className="flex items-center justify-start shrink-0">
        <img
          src={profile}
          alt={order.partner.name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <span className="text-[16px] font-[700] truncate">
          {order.partner.name}
        </span>
      </div>
    </td>

    {/* Vendor */}
    <td className="py-3 px-4 w-full min-w-0">
      <div className="flex items-center justify-start shrink-0">
        <img
          src={order.vendor.avatar}
          alt={order.vendor.name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <span className="text-[16px] font-[700] truncate">
          {order.vendor.name}
        </span>
      </div>
    </td>

    {/* Amount */}
    <td className="py-3 px-4 text-right">
      <span className="text-[16px] font-[700]">
        {formatCurrency(order.amount, order.currency)}
      </span>
    </td>

    {/* Order Details */}
    <td className="py-3 px-4 text-right text-[16px] font-[700]">
      <span className=" text-[16px] truncate">{order.items}</span>
    </td>
  </tr>
);

export default OrderRow;
