import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  status: string;
  description: string;
  passed: boolean;
}

export default function Timeline({ status }: { status: string }) {
  // Define the order of statuses, now in lowercase (slug format)
  const statusOrder = [
    { slug: "pending", title: "Order Pending" },
    { slug: "approved", title: "Order Approved" },
    { slug: "picked-up", title: "Order Picked up" },
    { slug: "in-transit", title: "In-Transit" },
    { slug: "delivered", title: "Order Delivered" },
  ];

  // Find the index of the current status
  const currentStatusIndex = statusOrder.findIndex((step) => step.slug === status);

  // Create steps based on the status passed
  const steps: TimelineStep[] = statusOrder.map((step, index) => ({
    status: step.title, // Use title format for display
    description: getDescription(step.slug), // Add a description for each step
    passed: index <= currentStatusIndex, // Mark all steps up to the current status as passed
  }));

  // Helper function to get the description of each step based on slug
  function getDescription(slug: string) {
    switch (slug) {
      case "pending":
        return "Partner's order awaiting pick-up";
      case "approved":
        return "Partner's order approved for pick-up";
      case "picked-up":
        return "Partner's order has been picked up";
      case "in-transit":
        return "Partner's order is on its way to the vendor";
      case "delivered":
        return "Partner's order has been delivered to the vendor";
      default:
        return "";
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Timeline Dots and Lines */}
      <div className="relative w-full flex justify-between items-start">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center w-full">
            {/* Dot + Check */}
            <div className="z-10 mb-2">
              <CheckCircle2
                className={cn(
                  "size-5 text-white relative z-[2]",
                  step.passed
                    ? "fill-[#15221B]"
                    : "fill-[#D0D3D1] stroke-transparent text-[#D0D3D1]"
                )}
              />
              {/* Line connecting to the next step */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "absolute top-2 left-1/2 h-px w-full border-t-2 border-dashed",
                    steps[index + 1].passed
                      ? "border-[#15221B]"
                      : "border-[#15221B]/30"
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
              {step.status} {/* Display the title as it was originally */}
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
