import React from "react";
import orderBox from "@/assets/svgs/orderBox.svg";
import { Separator } from "@/components/ui/separator";
import { Order } from "@/types/admin";
import { formatDisplayTime } from "@/lib/formatDateTime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";

interface Props {
  data: Order;
}

const Overview: React.FC<Props> = ({ data }) => {
  const order = data;
  // const formattedDate = order?.created_at ? new Date(order.created_at) : null;

  return (
    <div className="flex flex-col gap-y-[20px] sm:flex-row justify-between sm:items-center">
      <div className="flex gap-5 sm:gap-10 md:gap-14 lg:gap-20 items-center lg:pl-[60px] w-full text-end sm:text-start">
        <img
          src={orderBox}
          alt="Order box"
          className="size-[116.6px] shrink-0"
        />
        <div className="space-y-[12px] flex-grow">
          <h1 className="text-[18px] sm:text-[22px] font-[500]">
            Order #{order?.order_id}
          </h1>

          <div className="space-y-[2px] font-satoshi">
            <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
              Order ID
            </p>
            <p className="text-[14px] sm:text-[16px] font-[700]">
              {order?.order_id}
            </p>
          </div>

          {/* Always show partner (admin-only view) */}
          <div className="space-y-[2px] font-satoshi flex flex-col ">
            <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
              Partner
            </p>
            <div className="text-[14px] sm:text-[16px] font-[700] flex gap-[4px] justify-end sm:justify-start items-center w-full">
              <Avatar className="size-[30px]">
                <AvatarImage src="https://github.com/shadcn.pn" alt="@shadcn" />
                <AvatarFallback className="text-[12px]">
                  {getInitials(order?.partner_name)}
                </AvatarFallback>
              </Avatar>
              <p className="text-[16px] font-[700]">{order?.partner_name}</p>
            </div>
          </div>

          <div className="space-y-[2px] font-satoshi">
            <p className="text-[14px] font-[500] text-[#929292]">
              Date purchased
            </p>
            <p className="text-[16px] font-[700]">
              {formatDisplayTime(order?.created_at)}
            </p>
          </div>
        </div>
      </div>

      <Separator className="sm:hidden" />

      <div className="space-y-[12px] text-end">
        <h1 className="text-[14px] text-[#1C274C] text-nowrap bg-[#1C274C1A] py-[4px] px-[12px] rounded-[2px] uppercase">
          {order?.status}
        </h1>

        <div className="space-y-[2px] font-satoshi">
          <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
            Amount paid
          </p>
          <p className="text-[14px] sm:text-[16px] font-[700]">
            ${order?.amount_invested?.toLocaleString('en-GB')}
          </p>
        </div>

        <div className="space-y-[2px] font-satoshi">
          <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
            Returns
          </p>
          <p className="text-[14px] sm:text-[16px] font-[700] text-[#16A34A]">
            <span>+{order?.roi_rate}%</span>
            <span> | </span>
            <span>${order?.total_roi?.toLocaleString('en-GB')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
