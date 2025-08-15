import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import React from "react";
import WR from "@/assets/svgs/WR.svg";
import { toast } from "sonner";
import { Toast } from "../../Toast";
import { useCloseDialog } from "@/hooks/closeDialog";
import { Upload } from "lucide-react";
import { ApproveData, WithdrawalData } from "@/types/admin";
import { formatDisplayTime } from "@/lib/formatDateTime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveWithdrawal } from "@/api/adminEndpoints";
import { Button } from "@/components/ui/button";

interface Props {
  data: WithdrawalData;
}

const ApproveWithdrawal: React.FC<Props> = ({ data }) => {
  const closeDialog = useCloseDialog("approve-withdrawal");
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: Partial<ApproveData>) =>
      approveWithdrawal(data.withdraw_id, payload),
  });

  const handleApprove = () => {
    mutate(
      {
        action: "approve",
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["withdrawal-requests"] })
          toast.custom(
            () => <Toast text="Withdrawal Approved" icon={<Upload />} />,
            {
              duration: 4000,
              position: "top-right",
            }
          );
          closeDialog();
        },
      }
    );
  };

  const handleDecline = () => {
    mutate(
      {
        action: "decline",
      },
      {
        onSuccess: () => {
          toast.custom(
            () => <Toast text="Withdrawal Approved" icon={<Upload />} />,
            {
              duration: 4000,
              position: "top-right",
            }
          );
          closeDialog();
        },
      }
    );
  };

  return (
    <GlobalDialog dialogName="approve-withdrawal">
      {/* Header */}
      <DialogContent className="flex flex-col justify-center items-center text-center">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col gap-[8px] items-center">
            <div className="p-4 shrink-0 bg-[#15221B33] rounded-full w-fit">
              <img src={WR} className="w-[36px] h-auto" alt="" />
            </div>
            <h2 className="font-[700] text-[20px] text-[#252525]">
              Withdrawal Request
            </h2>
            <p className="text-sm text-[#252525]/70">
              Review partner’s withdraw request
            </p>
          </div>
        </div>

        {/* Avatar and Name */}
        <div className="flex flex-col gap-[8px] items-center mb-4">
          <p className="text-lg font-medium">{data.partner_name}</p>
          <Avatar className="size-[100px]">
            <AvatarImage src="https://github.com/shadcn.pn" alt="@shadcn" />
            <AvatarFallback>{getInitials(data?.partner_name)}</AvatarFallback>
          </Avatar>
          <p className="text-[30px]  text-primary font-[700] font-satoshi">
            £{data.amount}
          </p>
        </div>

        {/* Details */}
        <div className="font-satoshi space-y-[8px]">
          <p className="text-sm text-gray-500">
            Available balance: <strong>£{data.balance}</strong>
          </p>
          <p className="text-sm text-gray-500">
            Withdrawal type:{" "}
            <strong>
              {data.from_user} to {data.to}
            </strong>
          </p>
          <p className="text-sm text-gray-400">
            Request made by: {formatDisplayTime(data.requested_at)}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4 w-full">
          <button
            type="button"
            className="px-4 py-3 bg-[#F9F9F9] border-gray-300 text-[14px] rounded-[8px] text-gray-700 hover:bg-gray-100 flex-1"
            onClick={handleDecline}
          >
            Decline
          </button>
          <Button
            type="button"
            className="px-4 py-3 bg-primary text-white rounded-[8px] hover:bg-primary/90 flex-1"
            onClick={handleApprove}
            disabled={isPending}
          >
            {!isPending ? "Approve" : "Approving..."}
          </Button>
        </div>
      </DialogContent>
    </GlobalDialog>
  );
};

export default ApproveWithdrawal;
