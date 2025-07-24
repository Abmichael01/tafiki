import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  status: string;
  description: string;
  passed: boolean;
}

const steps: TimelineStep[] = [
  {
    status: "Order Pending",
    description: "Partner's order awaiting pick-up",
    passed: true,
  },
  {
    status: "Order Picked up",
    description: "Partner's order has been picked up",
    passed: false,
  },
  {
    status: "In-Transit",
    description: "Partner's order is on its way to the vendor",
    passed: false,
  },
  {
    status: "Order Delivered",
    description: "Partner's order has been delivered to the vendor",
    passed: false,
  },
];

export default function Timeline() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Timeline Dots and Lines */}
      <div className="relative w-full flex justify-between items-start px-4 sm:px-8 md:px-16">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center w-full">
            {/* Dot + Check */}
            <div className=" z-10 mb-2">
              <CheckCircle2
                className={cn(
                  "size-5 text-white relative z-[2]",
                  step.passed ? "fill-[#15221B]" : "fill-[#D0D3D1] stroke-transparent text-[#D0D3D1]"
                )}
              />
              {/* Line connecting to the next step */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute top-2 left-1/2 h-px w-full border-t-2 border-dashed",
                    steps[index + 1].passed ? "border-[#15221B]" : "border-[#15221B]/30"
                  )}
                />
              )}
            </div>

            {/* Text Below */}
            <h1
              className={cn(
                "text-[13px] font-semibold",
                step.passed ? "text-[#15221B]" : "text-[#15221B]/40"
              )}
            >
              {step.status}
            </h1>
            <p
              className={cn(
                "text-xs max-w-[140px] mt-1 font-medium font-satoshi",
                step.passed ? "text-[#6E6E6E]" : "text-[#6E6E6E]/40"
              )}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
