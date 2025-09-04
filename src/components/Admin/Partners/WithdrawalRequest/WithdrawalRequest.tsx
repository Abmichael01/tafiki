import React, { useState } from "react";
import history from "@/assets/svgs/history.svg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ApproveWithdrawal from "./ApproveWithdrawal";
import { WithdrawalData } from "@/types/admin";
import { formatDisplayTime } from "@/lib/formatDateTime";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";
import PageTitle from "@/components/ui/PageTitle";


interface Props {
  all?: boolean;
  data: WithdrawalData[];
}

const WithdrawalRequests: React.FC<Props> = ({ all: viewAll, data }) => {
  const [selectedRequest, setSelectedRequest] = useState<WithdrawalData | null>(null);

  const handleRequestClick = (item: WithdrawalData) => {
    setSelectedRequest(item); // Set the selected withdrawal data when clicked
  };

  return (
    <div className="space-y-[12px] h-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <PageTitle title={`Withdrawal Requests (${data?.length})`} showBack={viewAll} />
        </div>

        {!viewAll && data?.length !== 0 && (
          <Link
            to="/admin/partners/withdrawal-requests"
            className="hover:underline font-medium text-[14px] flex gap-[1px] items-center"
          >
            View all
            <ChevronRight className="h-[15px] text-[#494949]" />
          </Link>
        )}
      </div>

      <div className="space-y-[4px] divide-y h-full">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-[12px] border-[#F0F0F0]"
          >
            <Link
              to="?dialog=approve-withdrawal"
              className="flex gap-[16px] items-center"
              onClick={() => handleRequestClick(item)} // When clicked, set the selected request data
            >
              {/* User Avatar */}
              <Avatar className="size-[36px]">
                <AvatarImage src={String(item.profile_pic)} alt="@shadcn" />
                <AvatarFallback>{getInitials(item.partner_name)}</AvatarFallback>
              </Avatar>

              <div className="space-y-[2px] font-satoshi">
                <h1 className="text-[16px] font-[700]">Withdrawal Request</h1>
                <p className="text-[12px] text-[#6E6E6E]">by {item.partner_name}</p>
                <p className="text-[12px] text-[#6E6E6E]">
                  {formatDisplayTime(item.requested_at)}
                </p>
              </div>
            </Link>

            <h1 className="text-[18px] font-[700] font-satoshi text-end">
              ${item.amount}
            </h1>
          </div>
        ))}

        {data?.length === 0 && (
          <div className="flex flex-col gap-5 justify-center items-center h-full py-10">
            <img
              src={history}
              alt="No history"
              className="size-[30px] sm:size-[40px] lg:size-[60px]"
            />
            <h2 className="text-primary/70">There is no withdrawal request</h2>
          </div>
        )}
      </div>

      {/* Show Approve Withdrawal when a request is selected */}
      {selectedRequest && <ApproveWithdrawal data={selectedRequest} />}
    </div>
  );
};

export default WithdrawalRequests;
