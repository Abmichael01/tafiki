import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import React from "react";

const timeline = [
  {
    status: "Request Pending",
    description: "Your request is awaiting confirmation.",
    passed: true,
  },
  {
    status: "Request Approved",
    description: "Your request has been approved and is being processed.",
    passed: true,
  },
  {
    status: "Product Picked up",
    description:
      "Your product has been picked up by the courier and is on its way.",
    passed: true,
  },
  {
    status: "In-Transit",
    description: "Your product is in transit and will arrive soon.",
    passed: true,
  },
  {
    status: "Product Delivered",
    description: "Your product has been delivered. Thank you for choosing us!",
    passed: true,
  },
  {
    status: "Pending Settlement",
    description:
      "Your returns are pending and would be paid 5 weeks after order placement.",
    passed: true,
  },
  {
    status: "Settled",
    description: "Your returns have been credited to your Portfolio!",
    passed: false,
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="space-y-[40px]">
      {timeline.map((item, index) => (
        <div key={index} className="flex items-center gap-[24px]">
          <div className="relative size-fit">
            <CheckCircle2
              className={cn(
                " text-white size-[20px]",
                item.passed ? "fill-[#15221B]" : "fill-[#D0D3D1] text-[#D0D3D1]"
              )}
            />
            {timeline.length - 1 !== index && (
                <div className={cn(
                    "absolute border-1 h-[80px]  top-[20px] right-[9px]  border-dashed",
                    timeline[index + 1].passed ? "border-[#15221B]" : "border-[#15221B]/30"
                )}></div>
            )}
          </div>
          <div className="space-y-[]">
            <h1
              className={cn(
                "font-[600] text-[16px] ",
                item.passed ? "text-[#15221B]" : "text-[#15221B]/40"
              )}
            >
              {item.status}
            </h1>
            <p
              className={cn(
                "text-[16px] font-[500] text-[#6E6E6E] font-satoshi",
                item.passed ? "text-[#6E6E6E]" : "text-[#6E6E6E]/40"
              )}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
