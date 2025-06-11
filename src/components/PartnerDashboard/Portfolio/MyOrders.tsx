import { cn } from "@/lib/utils";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import orderBox from "@/assets/svgs/orderBox.svg";
import useUserDetailsStore from "@/stores/userStore";
import { Order } from "@/types";


interface Props {
  pending?: boolean;
}

const MyOrders: React.FC<Props> = ({ pending }) => {
  const { userDetails } = useUserDetailsStore();
  let orders = userDetails?.investment_summary as Order[];
  if (pending) {
    orders = orders?.filter((order) => order.status === "Pending settlement");
  }
  return (
    <div className="space-y-[12px]">
      <div className="flex gap-[4px] items-center">
        <h1 className="text-[18px] font-[600]">
          My Orders
          <span className="text-[14px] font-[400]"> ({ orders?.length ?? 0 })</span>
        </h1>
        <Link to="/partner/my-orders?tab=processing">
          <FaChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[40px] px-[24px]">
        {orders?.map((order, index) => (
          <Link
            to={`/partner/my-orders/${order.order_id}`}
            key={index}
            className="flex flex-col gap-[8px] items-center text-center font-satoshi"
          >
            <img src={orderBox} alt="" />
            <div className="space-y-[4px]">
              <h1 className="text-[#494949 font-[500]">Order #{order.order_id}</h1>
              <p
                className={cn(
                  "px-[12px] py-[4px] text-[12px] font-[500] rounded-[2px]",
                  order.status === "Approved"
                    ? "bg-[#16A34A1A] text-[#16A34A]"
                    : order.status === "Processing"
                    ? "bg-[#FFD60A1A] text-[#FFD60A]"
                    : "bg-[#1C274C1A] text-[#1C274C]"
                )}
              >
                {order.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
