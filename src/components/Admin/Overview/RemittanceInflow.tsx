import React from "react";
import TransactionList from "../Transactions/TransactionList";
import { Transaction } from "@/types/admin";

const dummyRemittanceData = [
  {
    type: "Remittance Inflow",
    time: "Today, 10:15 AM",
    amount: "18,000",
    description: "from Vendor 1",
    status: "remittance",
    isCredit: true,
  },
  {
    type: "Remittance Inflow",
    time: "Yesterday, 04:45 PM",
    amount: "9,500",
    description: "from Vendor 2",
    status: "remittance",
    isCredit: true,
  }, 
  {
    type: "Remittance Inflow",
    time: "13th July, 2025 - 11:30 AM",
    amount: "12,750",
    description: "from Vendor 3",
    status: "remittance",
    isCredit: true,
  },
  {
    type: "Remittance Inflow",
    time: "12th July, 2025 - 09:00 AM",
    amount: "7,200",
    description: "from Vendor 4",
    status: "remittance",
    isCredit: true,
  },
];

const RemittanceInflow: React.FC = () => {
  return (
    // <div className="space-y-[12px]">
    //   <div className="flex justify-between items-center">
    //     <h1 className="font-[600] text-[18px]">Remittance Inflow</h1>
    //     <button className="hover:underline font-medium text-[14px] flex gap-[1px] items-center">
    //       View All
    //       <ChevronRight className="h-[15px] text-[#494949]" />
    //     </button>
    //   </div>

    //   <div className="space-y-[4px]">
    //     {dummyRemittanceData.map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex justify-between items-center p-[12px] border-b border-[#F0F0F0]"
    //       >
    //         <div className="flex gap-[16px] items-center">
    //           <div className={cn("p-2 rounded-full bg-[#16A34A1A] text-[#16A34A]")}>
    //             <FiPlus className="size-[15px]" />
    //           </div>
    //           <div className="space-y-[2px] font-satoshi">
    //             <h1 className="text-[18px]">{item.type}</h1>
    //             <p className="text-[12px]">{item.time}</p>
    //           </div>
    //         </div>
    //         <h1 className="text-[16px] font-[700] font-satoshi text-start">
    //           +£{item.amount}
    //         </h1>
    //       </div>
    //     ))}

    //     {dummyRemittanceData.length === 0 && (
    //       <div className="flex flex-col gap-5 justify-center items-center h-30">
    //         <img
    //           src={history}
    //           alt="No history"
    //           className="size-[40px] sm:size-[60px] lg:size-[80px]"
    //         />
    //         <h2 className="text-primary/70">You have no history here</h2>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <TransactionList transactions={[] as Transaction[]} heading="Remittance Inflow" showViewAll={true} viewAllLink="/admin/transactions" vendor={false} />
  );
};

export default RemittanceInflow;
