import { Order } from "@/types/admin";
import profile from "@/assets/images/userPic.webp";
import orderBox from "@/assets/svgs/orderBox.svg";
import { Link } from "react-router-dom";
import { formatDisplayTime } from "@/lib/formatDateTime";
import { cn } from "@/lib/utils";
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
        to={`/admin/orders/${order.order_id}`}
        className="flex gap-2 items-center mr-5"
      >
        <img src={orderBox} alt="order-box" className="w-[40px]" />
        <div className="mr-8">
          <div className="font-[700] text-[18px]">{order.order_id}</div>
          <div className="text-[14px] font-[500] text-[#929292]">
            {formatDisplayTime(order.created_at)}
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
      <div className="flex items-center justify-start shrink-0 hover:bg-gray-50 rounded-md p-1 -m-1 transition-colors cursor-pointer">
        <img
          src={profile}
          alt={order.vendor_name}
          className="w-6 h-6 rounded-full mr-2"
        />
        <span className="text-[16px] font-[700] truncate hover:text-primary">
          {order.vendor_name}
        </span>
      </div>
    </td>

    {/* Amount */}
    <td className="py-3 px-4 text-right">
      <span className="text-[16px] font-[700]">
                 £{Number(order.amount_invested).toLocaleString('en-GB')}
      </span>
    </td>

    {/* Order Details */}
    {/* {!status && (
      <td className="py-3 px-4 text-right text-[16px] font-[700]">
        <span className=" text-[16px] truncate">{order.items}</span>
      </td>
    )} */}
    <td className="px-4 py-3 text-[16px] text-center font-[700]">
      {!status ? (
        <p className="">
          {order?.product?.map((prod) => (
            <span>{prod}, </span>
          ))}
        </p>
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
);

export default OrderRow;
