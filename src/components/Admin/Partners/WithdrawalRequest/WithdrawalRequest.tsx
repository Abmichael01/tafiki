import React from "react";
import history from "@/assets/svgs/history.svg";
import { ChevronRight } from "lucide-react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import ApproveWithdrawal from "./ApproveWithdrawal";
import { WithdrawalData } from "@/types/admin";

interface Props {
  all?: boolean;
  data: WithdrawalData[];
}

const WithdrawalRequests: React.FC<Props> = ({ all: viewAll, data }) => {
  return (
    <div className="space-y-[12px] h-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          {viewAll && (
            <Link to="/admin/partners">
              <GoArrowLeft className="size-[24px]" />
            </Link>
          )}
          <h1 className="font-[600] text-[20px]">
            Withdraw Requests{" "}
            <span className="font-[400] text-[14px]">({data?.length})</span>
          </h1>
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
            >
              {/* User Avatar */}
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
                className="w-[36px] h-[36px] rounded-full object-cover"
              />

              <div className="space-y-[2px] font-satoshi">
                <h1 className="text-[16px] font-[700]">Withdrawal Request</h1>
                <p className="text-[12px] text-[#6E6E6E]">
                  by {item.user_name}
                </p>
                {/* <p className="text-[12px] text-[#6E6E6E]">{item.time}</p> */}
              </div>
            </Link>

            <h1 className="text-[18px] font-[700] font-satoshi text-end">
              £{item.pending_withdrawals_amount}
            </h1>
            <ApproveWithdrawal data={item as WithdrawalData} />
          </div>
        ))}

        {data?.length === 0 && (
          <div className="flex flex-col gap-5 justify-center items-center h-full">
            <img
              src={history}
              alt="No history"
              className="size-[40px] sm:size-[60px] lg:size-[80px]"
            />
            <h2 className="text-primary/70">There is no withdrawal request</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawalRequests;
