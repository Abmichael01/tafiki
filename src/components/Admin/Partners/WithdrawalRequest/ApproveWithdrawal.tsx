import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import React from "react";
import WR from "@/assets/svgs/WR.svg";
import { toast } from "sonner";
import { Toast } from "./Toast";
import { useCloseDialog } from "@/hooks/closeDialog";

const dummyWithdrawalRequest = {
  name: "John Doe",
  avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  amount: "$500.00",
  availableBalance: "$2,000.00",
  walletType: "Portfolio to Wallet",
  requestTime: "2024-06-10 14:30",
};

const ApproveWithdrawal: React.FC = () => {
  const closeDialog = useCloseDialog("approve-withdrawal");
  const handleApprove = () => {
    toast.custom(() => (
      <Toast text="Withdrawal Approved" />
    ), {
      duration: 4000,
      position: "top-right",
    });
    closeDialog();
  };

  const handleDecline = () => {
    toast.custom(() => (
      <Toast text="Withdrawal Declined" decline />
    ), {
      duration: 4000,
      position: "top-right",
    });
    closeDialog();
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
          <p className="text-lg font-medium">{dummyWithdrawalRequest.name}</p>
          <img
            src={dummyWithdrawalRequest.avatarSrc}
            alt={dummyWithdrawalRequest.name}
            className="size-[100px] rounded-full mr-4"
          />
          <p className="text-[24px]  text-primary font-[700] font-satoshi">
            {dummyWithdrawalRequest.amount}
          </p>
        </div>

        {/* Details */}
        <div className="font-satoshi space-y-[8px]">
          <p className="text-sm text-gray-500">
            Available balance:  <strong>{dummyWithdrawalRequest.availableBalance}</strong>
          </p>
          <p className="text-sm text-gray-500">
            Withdrawal type: <strong>{dummyWithdrawalRequest.walletType}</strong>
          </p>
          <p className="text-sm text-gray-400">
            Request made by: {dummyWithdrawalRequest.requestTime}
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
          <button
            type="button"
            className="px-4 py-3 bg-green-600 bg-primary text-white rounded-[8px] hover:bg-primary/90 flex-1"
            onClick={handleApprove}
          >
            Approve
          </button>
        </div>
      </DialogContent>
    </GlobalDialog>
  );
};

export default ApproveWithdrawal;
