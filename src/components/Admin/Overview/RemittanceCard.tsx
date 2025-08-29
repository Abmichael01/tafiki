import React from "react";  
import { RemittanceHistory } from "@/types/admin";
import { FiPlus } from "react-icons/fi";
import { formatDisplayTime } from "@/lib/formatDateTime";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Check, X, Loader2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveRemittance } from "@/api/adminEndpoints";
import { toast } from "sonner";

interface RemittanceCardProps {
  remittance: RemittanceHistory;
  showFrom?: boolean; // Controls whether to show "from {vendor_name}"
  admin?: boolean;
}

const RemittanceCard: React.FC<RemittanceCardProps> = ({
  remittance,
  showFrom = true,
  admin = false,
}) => {
  const { vendor_name, amount, status, created_at, remittance_id } = remittance;
  
  const queryClient = useQueryClient();

  const { mutate: handleRemittanceAction, isPending } = useMutation({
    mutationFn: ({ remittance_id, action }: { remittance_id: string; action: "approve" | "reject" }) => {
      const apiAction = action === "reject" ? "reject" : action;
      return approveRemittance(remittance_id, apiAction);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["remittances"] });
      queryClient.invalidateQueries({ queryKey: ["overview"] });
      const actionText = variables.action === "approve" ? "approved" : "rejected";
      toast.success(`Remittance ${actionText} successfully`);
    },
    onError: (error) => {
      console.error("Error processing remittance:", error);
      toast.error("Failed to process remittance. Please try again.");
    },
  });

  const isApproved = status === "approved";
  const isRejected = status === "rejected";

  const statusColor = isApproved
    ? "text-[#16A34A]"
    : isRejected
    ? "text-[#B52217]"
    : "text-[#F59E0B]";

  const statusBg = isApproved
    ? "bg-[#16A34A1A]"
    : isRejected
    ? "bg-[#B522171A]"
    : "bg-[#F59E0B1A]";

  return (
    <div className="flex justify-between items-center py-[12px] border-b border-[#F0F0F0] last:border-b-0">
      <div className="flex gap-[16px] items-center">
        <div className={`p-2 rounded-full ${statusBg} ${statusColor}`}>
          <FiPlus className="size-[15px]" />
        </div>
        <div className="font-satoshi">
          <h1 className="text-[16px] font-medium">Remittance</h1>
          {showFrom && (
            <p className="text-[12px] text-gray-500">from {vendor_name}</p>
          )}
          <p className="text-[10px] text-gray-400">
            {formatDisplayTime(created_at, {
              showYear: false,
              isRelative: true,
            })}
          </p>
        </div>
      </div>
      <div className="text-right space-y-2">
        <h1 className="text-[16px] font-[700] font-satoshi">
          +£{amount.toLocaleString("en-GB")}
        </h1>
        {status === "pending" && <p className="text-[12px] text-gray-500">Confirming Otp...</p>}
        {(admin && status === "completed"  ) && (
          <TooltipProvider>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="size-[25px]"
                    disabled={isPending}
                    onClick={() => {
                      handleRemittanceAction({ remittance_id, action: "approve" });
                    }}
                  >
                    {isPending ? (
                      <Loader2 className="size-[15px] animate-spin" />
                    ) : (
                      <Check className="size-[15px]" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Approve</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="size-[25px]"
                    disabled={isPending}
                    onClick={() => {
                      handleRemittanceAction({ remittance_id, action: "reject" });
                    }}
                  >
                    {isPending ? (
                      <Loader2 className="size-[15px] animate-spin" />
                    ) : (
                      <X className="size-[15px]" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reject</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

export default RemittanceCard;
