import React from "react";
import orderBox from "@/assets/svgs/orderBox.svg";
import { Separator } from "@/components/ui/separator";
import useUserDetailsStore from "@/stores/userStore";
import { Order } from "@/types";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import userPic from "@/assets/images/userPic.webp";

interface Props {
  admin?: boolean;
}

const mockOrder: Order = {
  amount_invested: 50000,
  created_at: "2025-07-15T10:30:00Z",
  order_id: "ORD-INVEST-00123",
  roi_expected: 7500,
  total_roi_paid: 3000,
  roi_pending: 4500,
  roi_rate: 15,
  status: "in_transit",
  future_roi: 4500,
  product: [
    {
      id: 1,
      name: "Garri (Yellow)",
      price: "25000",
      product_id: "PROD-GARRI-001",
      roi_percentage: "15",
      stock_quantity: 200,
      description: "High quality yellow garri processed locally.",
      kg_per_unit: "5",
      quantity_per_unit: "1 bag",
    },
    {
      id: 2,
      name: "Palm Oil",
      price: "25000",
      product_id: "PROD-OIL-002",
      roi_percentage: "15",
      stock_quantity: 150,
      description: "Freshly extracted palm oil, 25L container.",
      kg_per_unit: "25",
      quantity_per_unit: "1 container",
    },
  ],
  payout_schedule: [
    {
      payout_date: "2025-08-15T00:00:00Z",
      amount: 1500,
    },
    {
      payout_date: "2025-09-15T00:00:00Z",
      amount: 1500,
    },
    {
      payout_date: "2025-10-15T00:00:00Z",
      amount: 1500,
    },
  ],
};

const Overview: React.FC<Props> = ({ admin }) => {
  const { userDetails } = useUserDetailsStore();
  const orders = userDetails?.investment_summary as Order[];
  const { id } = useParams<{ id: string }>();
  const order = admin
    ? mockOrder
    : orders?.find((order) => order.order_id === id);
  const formattedDate = order?.created_at ? new Date(order.created_at) : null;
  return (
    <div className="flex flex-col gap-y-[20px] sm:flex-row justify-between sm:items-center">
      <div className="flex gap-5 sm:gap-10 md:gap-14 lg:gap-20 items-center lg:pl-[60px] w-full text-end sm:text-start">
        <img src={orderBox} alt="" className="size-[116.6px] shrink-0" />
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
          {admin && (
            <div className="space-y-[2px] font-satoshi">
              <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
                Partner
              </p>
              <div className="text-[14px] sm:text-[16px] font-[700] flex gap-[4px] items-center">
                <img
                  src={userPic}
                  alt=""
                  className="size-[24px] rounded-full"
                />
                <p className="text-[16px] font-[700]">
                  John Doe
                </p>
              </div>
            </div>
          )}
          <div className="space-y-[2px] font-satoshi">
            <p className="text-[14px] font-[500] text-[#929292]">
              Date purchased
            </p>
            <p className="text-[16px] font-[700]">
              {formattedDate ? format(formattedDate, "MMM dd, yyyy") : "-"}
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
            £{order?.amount_invested?.toLocaleString('en-GB')}
          </p>
        </div>
        <div className="space-y-[2px] font-satoshi">
          <p className="text-[12px] sm:text-[14px] font-[500] text-[#929292]">
            Returns
          </p>
          <p className="text-[14px] sm:text-[16px] font-[700] text-[#16A34A]">
            <span className="">+{order?.roi_rate}%</span>
            <span className=""> | </span>
            <span className="">£{order?.future_roi?.toLocaleString('en-GB')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
