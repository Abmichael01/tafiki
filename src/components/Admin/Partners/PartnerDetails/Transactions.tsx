import React from "react";
import { FiPlus, FiUpload } from "react-icons/fi";
import { HistoryIcon } from "lucide-react";
import history from "@/assets/svgs/history.svg";
import { Link } from "react-router-dom";

// Transaction data for demo (replace with real data as needed)
const transactions = [
  {
    type: "Remittance Received",
    time: "8:12am, 21st Jan. 2025",
    amount: "+£2350",
    status: "success",
  },
  {
    type: "Withdrawal",
    time: "15:12pm, 21st Jan. 2025",
    amount: "-£2350",
    status: "withdrawal",
  },
  {
    type: "Remittance Received",
    time: "12:24pm, 21st Jan. 2025",
    amount: "+£2350",
    status: "success",
  },
  {
    type: "Remittance Received",
    time: "9:41am, 21st Jan. 2025",
    amount: "+£2350",
    status: "success",
  },
  {
    type: "Withdrawal",
    time: "9:41am, 21st Jan. 2025",
    amount: "-£2350",
    status: "withdrawal",
  },
  {
    type: "Wallet Fund",
    time: "9:41am, 21st Jan. 2025",
    amount: "+£2350",
    status: "wallet",
  },
];

interface TransactionsProps {
  heading?: string;
  showViewAll?: boolean;
}

/**
 * Transactions component for displaying a list of partner transactions.
 * - Uses local demo data (transactions) defined in this file.
 * - Accepts optional heading and showViewAll props.
 * - Does NOT accept a data prop.
 */
const Transactions: React.FC<TransactionsProps> = ({
  heading = "Transactions",
  showViewAll = true,
}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center py-2">
        <h1 className="font-[600] text-[16px]">{heading}</h1>
        {showViewAll && (
          <Link to={'/admin/partners/1/transactions'}
            className="text-xs text-[#1C274C] font-medium hover:underline"
          >
            View all
          </Link>
        )}
      </div>
      <div className="">
        {transactions.length > 0 ? (
          transactions.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center py-3"
            >
              <div className="flex gap-3 items-center min-w-0">
                <div
                  className={
                    "flex items-center justify-center rounded-full w-7 h-7 " +
                    (item.type === "Remittance Received" || item.type === "Wallet Fund"
                      ? "bg-[#16A34A1A] text-[#16A34A]"
                      : item.type === "Withdrawal"
                      ? "bg-[#B522171A] text-[#B52217]"
                      : "bg-[#FEF3C7] text-[#D97706]")
                  }
                >
                  {item.type === "Withdrawal" ? (
                    <FiUpload className="size-[15px]" />
                  ) : item.type === "Wallet Fund" ? (
                    <FiPlus className="size-[15px]" />
                  ) : item.type === "Remittance Received" ? (
                    <FiPlus className="size-[15px]" />
                  ) : (
                    <HistoryIcon className="size-[15px]" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="font-satoshi font-[600] text-[15px] truncate text-nowrap">
                    {item.type}
                  </div>
                  <div className="text-[12px] text-[#929292] font-satoshi truncate text-nowrap">
                    {item.time}
                  </div>
                </div>
              </div>
              <div
                className={
                  "font-satoshi font-bold text-[15px] text-nowrap"}
              > 
                {item.amount}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-5 justify-center items-center h-32">
            <img
              src={history}
              alt="No transactions"
              className="size-[40px] sm:size-[60px] lg:size-[80px]"
            />
            <h2 className="text-primary/70">You have no transactions here</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
