import { cn } from "@/lib/utils";
import useUserDetailsStore from "@/stores/userStore";
import { Order } from "@/types";
import { CheckCircle2 } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

// interface TimelineStep {
//   status: string;
//   description: string;
//   passed: boolean;
// }

const timeline = [
  {
    slug: "pending",
    status: "Request Pending",
    description: "Your request is awaiting confirmation.",
  },
  {
    slug: "approved",
    status: "Request Approved",
    description: "Your request has been approved and is being processed.",
  },
  {
    slug: "picked-up",
    status: "Product Picked up",
    description:
      "Your product has been picked up by the courier and is on its way.",
  },
  {
    slug: "in-transit",
    status: "In-Transit",
    description: "Your product is in transit and will arrive soon.",
  },
  {
    slug: "delivered",
    status: "Product Delivered",
    description: "Your product has been delivered. Thank you for choosing us!",
  },
  {
    slug: "pending-settlement",
    status: "Pending Settlement",
    description:
      "Your returns are pending and would be paid 5 weeks after order placement.",
  },
  {
    slug: "settled",
    status: "Settled",
    description: "Your returns have been credited to your Portfolio!",
  },
];

const Timeline: React.FC = () => {
  const { userDetails } = useUserDetailsStore();
  const orders = userDetails?.investment_summary as Order[];
  const { id } = useParams<{ id: string }>();
  const order = orders?.find((order) => order?.order_id === id);
  console.log(order);

  const currentStatus = order?.status;
  // Update the timeline array to reflect the current status and passed steps
  const updatedTimeline = timeline.map((item, index) => ({
    ...item,
    passed:
      item.slug === currentStatus ||
      index < timeline.findIndex((step) => step.slug === currentStatus),
  }));

  return (
    <div className="space-y-[40px]">
      {updatedTimeline.map((item, index) => (
        <div key={index} className="flex items-center gap-[24px] relative">
          <div className="relative size-fit">
            <CheckCircle2
              className={cn(
                "text-white size-[20px]",
                item.passed ? "fill-[#15221B]" : "fill-[#D0D3D1] text-[#D0D3D1]"
              )}
            />
            {updatedTimeline.length - 1 !== index && (
              <div
                className={cn(
                  "absolute border-1 h-[100px] top-[20px] right-[9px] border-dashed",
                  updatedTimeline[index + 1].passed
                    ? "border-[#15221B]"
                    : "border-[#15221B]/30"
                )}
              ></div>
            )}
          </div>

          <div className="space-y-[]">
            <h1
              className={cn(
                "font-[600] text-[16px]",
                item.passed ? "text-[#15221B]" : "text-[#15221B]/40"
              )}
            >
              {item?.status}
            </h1>
            <p
              className={cn(
                "text-[16px] font-[500] text-[#6E6E6E] font-satoshi",
                item.passed ? "text-[#6E6E6E]" : "text-[#6E6E6E]/40"
              )}
            >
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
