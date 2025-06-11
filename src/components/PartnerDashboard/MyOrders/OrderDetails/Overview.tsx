import React from "react";
import orderBox from "@/assets/svgs/orderBox.svg";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "react-router-dom";
import useUserDetailsStore from "@/stores/userStore";
import { Order } from "@/types";
import { format } from 'date-fns';

const Overview: React.FC = () => {
  const { userDetails } = useUserDetailsStore();
  const orders = userDetails?.investment_summary as Order[];
  const location = useLocation()
  const id = location.pathname.split('/').pop() || '';
  const order = orders?.find((order) => order.order_id === id)
  const formattedDate = order?.created_at ? new Date(order.created_at) : null;
  return (
    <div className="flex flex-col gap-y-[20px] sm:flex-row justify-between sm:items-center">
      <div className="flex gap-5 sm:gap-10 md:gap-14 lg:gap-20 items-center lg:pl-[60px] w-full text-end sm:text-start">
        <img src={orderBox} alt="" className="size-[116.6px] shrink-0" />
        <div className="space-y-[12px] flex-grow">
          <h1 className="text-[18px] sm:text-[22px] font-[500]">Order #{order?.order_id}</h1>
          <div className="space-y-[2px] font-satoshi">
            <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">Order ID</p>
            <p className="text-[14px] sm:text-[16px] font-[700]">{order?.order_id}</p>
          </div>
          <div className="space-y-[2px] font-satoshi">
            <p className="text-[14px] font-[500] text-[#929292]">
              Date purchased
            </p>
            <p className="text-[16px] font-[700]">{formattedDate ? format(formattedDate, 'MMM dd, yyyy') : '-'}</p>
          </div>
        </div>
      </div>
      <Separator className="sm:hidden" />
      <div className="space-y-[12px] text-end">
        <h1 className="text-[14px] text-[#1C274C] bg-[#1C274C1A] py-[4px] px-[12px] rounded-[2px] ">
          Pending Settlement
        </h1>
        <div className="space-y-[2px] font-satoshi">
          <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
          Amount paid
          </p>
          <p className="text-[14px] sm:text-[16px] font-[700]">£{order?.amount_invested}</p>
        </div>
        <div className="space-y-[2px] font-satoshi">
          <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
          Returns
          </p>
          <p className="text-[14px] sm:text-[16px] font-[700] text-[#16A34A]">
            <span className="">+{order?.roi_rate}%</span> 
            <span className=""> | </span> 
            <span className="">£{order?.roi_expected}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
