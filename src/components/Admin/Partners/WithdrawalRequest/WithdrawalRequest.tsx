import React from "react";
import history from "@/assets/svgs/history.svg";
import { ChevronRight } from "lucide-react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import ApproveWithdrawal from "./ApproveWithdrawal";

const dummyWithdrawalData = [
  {
    name: "John Doe",
    time: "17:56, 21st Jan, 2025",
    amount: "500",
    avatar: "/path/to/avatar1.jpg", // You'll replace with actual image path
  },
  {
    name: "John Doe",
    time: "17:56, 21st Jan, 2025",
    amount: "500",
    avatar: "/path/to/avatar2.jpg", // You'll replace with actual image path
  },
  {
    name: "John Doe",
    time: "17:56, 21st Jan, 2025",
    amount: "500",
    avatar: "/path/to/avatar3.jpg", // You'll replace with actual image path
  },
  {
    name: "John Doe",
    time: "17:56, 21st Jan, 2025",
    amount: "500",
    avatar: "/path/to/avatar4.jpg", // You'll replace with actual image path
  },
];

interface Props {
  all?: boolean;
}

const WithdrawalRequests: React.FC<Props> = ({ all: viewAll }) => {
  return (
    <div className="space-y-[12px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          {viewAll && (
            <Link to="/admin/partners">
              <GoArrowLeft className="size-[24px]" />
            </Link>
          )}
          <h1 className="font-[600] text-[20px]">
            Withdraw Requests{" "}
            <span className="font-[400] text-[14px]">
              ({dummyWithdrawalData.length})
            </span>
          </h1>
        </div>

        {!viewAll && (
          <Link to="/admin/overview/withdrawal-requests" className="hover:underline font-medium text-[14px] flex gap-[1px] items-center">
            View all
            <ChevronRight className="h-[15px] text-[#494949]" />
          </Link>
        )}
      </div>

      <div className="space-y-[4px]">
        {dummyWithdrawalData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-[12px] border-b border-[#F0F0F0]"
          >
            <Link to="?dialog=approve-withdrawal" className="flex gap-[16px] items-center">
              {/* User Avatar */}
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
                className="w-[36px] h-[36px] rounded-full object-cover"
              />

              <div className="space-y-[2px] font-satoshi">
                <h1 className="text-[16px] font-[700]">Withdrawal Request</h1>
                <p className="text-[12px] text-[#6E6E6E]">by {item.name}</p>
                <p className="text-[12px] text-[#6E6E6E]">{item.time}</p>
              </div>
            </Link>

            <h1 className="text-[18px] font-[700] font-satoshi text-end">
              £{item.amount}
            </h1>
          </div>
        ))}

        {dummyWithdrawalData.length === 0 && (
          <div className="flex flex-col gap-5 justify-center items-center h-30">
            <img
              src={history}
              alt="No history"
              className="size-[40px] sm:size-[60px] lg:size-[80px]"
            />
            <h2 className="text-primary/70">You have no withdrawal requests</h2>
          </div>
        )}
      </div>
      <ApproveWithdrawal />
    </div>
  );
};

export default WithdrawalRequests;
