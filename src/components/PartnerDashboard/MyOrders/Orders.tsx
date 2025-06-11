import React from "react";
import orderBox from "@/assets/svgs/orderBox.svg";
import orderBox2 from "@/assets/svgs/orderBox2.svg";
import history from "@/assets/svgs/history.svg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Order } from "@/types";

interface Props {
  orders: Order[];
  tab?: string;
}

const Orders: React.FC<Props> = ({ orders, tab }) => {
  return (
    <div className="space-y-[16px] h-full w-full">
      {orders?.map((order, index) => (
        <Link
        to={`/partner/my-orders/${order.order_id}`}
          key={index}
          className="border-b border-[#F0F0F0] px-[12px] py-[8px] flex justify-between font-satoshi"
        >
          <div className="flex gap-[24px]">
            <img src={orderBox} alt="order-box" className="size-[72px]" />
            <div className="space-y-[8px] ">
              <div className="">
                {tab !== "ongoing" && (
                  <p className="text-[12px]  text-[#16A34A] font-[500]">
                    {order.roi_rate}% Returns
                  </p>
                )}
                <h1 className="text-[18px] font-[500]">
                   Order #{order.order_id}
                </h1>
              </div>
              <p className="text-[14px] font-[500] text-[#6E6E6E]">
                {order.products?.length} Products
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <h1 className="text-[18px] text-[#252525] font-[700]">
              £{order.amount_invested}
            </h1>
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

      {orders?.length === 0 && (
        <div className="flex flex-col h-full gap-[4px] items-center w-full">
          {tab !== "history" ? (
            <img src={orderBox2} alt="" className="size-[40px] sm:size-[60px] lg:size-[80px]" />
          ) : (
            <img src={history} alt="" className="size-[40px] sm:size-[60px] lg:size-[80px]" />
          )}
          <h1 className="text-[#929292] font-[700] text-[18px] sm:text-[22px] font-satoshi">
            {tab === "processing" && "You have no pending order"}
            {tab === "ongoing" && "You have no ongoing order"}
            {tab === "history" && "You have no order history"}
          </h1>
          {tab !== "history" && (
            <Link to="/partner/shop" className="w-full lg:w-fit">
              <Button className=" mt-7 sm:mt-10 lg:mt-14 bg-[#15221B] hover:bg-[#15221B]/90 w-full lg:w-[560px]">
                Make an order
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
