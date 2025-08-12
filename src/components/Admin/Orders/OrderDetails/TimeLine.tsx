import { CheckCircle2, Package2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderStatus } from "@/api/adminEndpoints";
import { StatusData } from "@/types/admin";
import { useParams } from "react-router-dom";
import LoadingData from "../../LoadingData";
import { toast } from "sonner";
import { Toast } from "../../Toast";

interface TimelineStep {
  status: string;
  description: string;
  passed: boolean;
}

export default function Timeline({ status }: { status: string }) {
  const { id } = useParams();
  // Define the order of statuses, now in lowercase (slug format)
  const statusOrder = [
    { slug: "pending", title: "Order Pending" },
    { slug: "approved", title: "Order Approved" },
    { slug: "picked-up", title: "Order Picked up" },
    { slug: "in-transit", title: "In-Transit" },
    { slug: "delivered", title: "Order Delivered" },
  ];

  const query = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: StatusData) => updateOrderStatus(data),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["order", id] });
      toast.custom(
        () => <Toast text="Withdrawal Approved" icon={<Package2 />} />,
        {
          duration: 4000,
          position: "top-right",
        }
      );
    },
  });

  const updateOrder = (status: string) => {
    const data = {
      model_type: "investment",
      order_id: id as string,
      status: status,
    };
    mutate(data);
  };

  // Find the index of the current status
  const currentStatusIndex = statusOrder.findIndex(
    (step) => step.slug === status
  );

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
      {!isPending && (
        <div className="relative w-full flex justify-between items-start">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-full cursor-pointer"
              onClick={() => updateOrder(statusOrder[index].slug)}
            >
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
      )}
      {isPending && <LoadingData />}
    </div>
  );
}
