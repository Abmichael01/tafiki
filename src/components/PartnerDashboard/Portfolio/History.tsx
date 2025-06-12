// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import { FiPlus, FiUpload } from "react-icons/fi";
import history from "@/assets/svgs/history.svg";

interface Props {
  heading?: string;
  data: {
    type: string;
    time: string;
    amount: string;
    status?: string
  }[];
}

const History: React.FC<Props> = ({ heading, data }) => {
  return (
    <div className="space-y-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[18px]">{heading}</h1>
        {/* <Select>
          <SelectTrigger className="min-w-[100px] rounded-[4px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Withdrawal</SelectItem>
            <SelectItem value="system">Remittance Inflow</SelectItem>
          </SelectContent>
        </Select> */}
      </div>
      <div className="space-y-[4px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-[12px] border-b border-[#F0F0F0]"
          >
            <div className="flex gap-[16px] items-center">
                <div
                className={cn(
                  "p-2 rounded-full",
                  (item.type === "Remittance Inflow" ||
                  item.type === "Wallet Funding")
                  ? "bg-[#16A34A1A] text-[#16A34A]"
                  : item.status === "pending" 
                  ? "bg-[#FEF3C7] text-[#D97706]"
                  : "bg-[#B522171A] text-[#B52217]"
                )}
                >
                {item.type == "Withdrawal" ? (
                  <FiUpload className="size-[15px]" />
                ) : (
                  <FiPlus className="size-[15px]" />
                )}
                </div>
              <div className="space-y-[2px] font-satoshi">
                <h1 className="text-[18px]">{item.type}</h1>
                <p className="text-[12px]">{item.time}</p>
              </div>
            </div>
            <h1 className="text-[16px] font-[700] font-satoshi">
              {item.amount}
            </h1>
          </div>
        ))}

        {data.length === 0 && (
          <div className="flex flex-col gap-5 justify-center items-center h-30">
            <img
              src={history}
              alt=""
              className="size-[40px] sm:size-[60px] lg:size-[80px]"
            />
            <h2 className="text-primary/70">You have no history here</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
