import React from "react";
import { ChevronRight, Upload, Plus, ArrowUpRight } from "lucide-react";
import history from "@/assets/svgs/history.svg";
import { Link } from "react-router-dom";
import TransactionDetails from "./TransactionDetails";

export interface Transaction {
  id?: string;
  type?: string;
  time: string;
  amount?: string;
  status?: string;
  description?: string;
  isCredit?: boolean;
  isDebit?: boolean;
}

interface TransactionListProps {
  transactions: Transaction[];
  heading?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
  showDescription?: boolean;
  showTransactionSign?: boolean;
  groupByDate?: boolean;
  emptyStateMessage?: string;
  className?: string;
  vendor?: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  heading,
  showViewAll = true,
  viewAllLink = "/admin/transactions",
  showTransactionSign = true,
  groupByDate = false,
  emptyStateMessage = "You have no transactions here",
  className = "",
  vendor = false,
}) => {
  // Helper function to format date for display
  const formatDisplayDate = (dateString: string) => {
    const transactionDate = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Reset time to compare only dates
    const transactionDateOnly = new Date(transactionDate.getFullYear(), transactionDate.getMonth(), transactionDate.getDate());
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const yesterdayOnly = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());

    if (transactionDateOnly.getTime() === todayOnly.getTime()) {
      return "Today";
    } else if (transactionDateOnly.getTime() === yesterdayOnly.getTime()) {
      return "Yesterday";
    } else {
      return transactionDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  };

  // Helper function to format time for display
  const formatDisplayTime = (dateString: string) => {
    const date = new Date(dateString);
    // Format time: e.g., 10:15 AM
    const timePart = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    // Format date: e.g., 1st Jan
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    // Get ordinal suffix for the day
    const getOrdinal = (n: number) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    const datePart = `${day}${getOrdinal(day)} ${month}`;
    return `${timePart}, ${datePart}`;
  };

  // Group transactions by date if groupByDate is true
  const groupedTransactions = groupByDate
    ? transactions.reduce((groups, transaction) => {
      const displayDate = formatDisplayDate(transaction.time);

      if (!groups[displayDate]) {
        groups[displayDate] = [];
      }
      groups[displayDate].push(transaction);
      return groups;
    }, {} as Record<string, Transaction[]>)
    : null;

  const renderTransaction = (transaction: Transaction, index: number) => (
    <Link
      key={transaction.id || index}
      className="flex justify-between items-center py-3"
      to={`?dialog=transaction-details`}
    >
      <div className="flex gap-3 items-center min-w-0 flex-1">
        <div
          className={`flex items-center justify-center rounded-full w-7 h-7 ${transaction.isCredit
            ? "bg-[#16A34A1A] text-[#16A34A]"
            : transaction.status === "withdrawal"
              ? "bg-[#B522171A] text-[#B52217]"
              : "bg-primary/10 text-primary"
            }`}
        >
          {transaction.status === "withdrawal" ? (
            <Upload className="size-[16px]" />
          ) : (
            !vendor ? <Plus className="size-[16px]" /> : <ArrowUpRight className="size-[16px]" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-satoshi font-[600] text-[15px] truncate text-nowrap">
            {transaction.type}
          </div>
          {transaction.description && (
            <div className="text-[12px] text-[#666] font-satoshi">
              {transaction.description}
            </div>
          )}
          <div className="text-[12px] text-[#929292] font-satoshi truncate text-nowrap">
            {formatDisplayTime(transaction.time)}
          </div>

        </div>
      </div>
      <div className="flex items-center">
        {showTransactionSign && (
          <span className="text-[12px] font-medium">
            {transaction.isCredit ? "+" : transaction.isDebit ? "-" : ""}
          </span>
        )}
        <div
          className={`font-satoshi font-bold text-[15px] text-nowrap text-primary"
            }`}
        >
          {transaction.amount}
        </div>
      </div>
    </Link>
  );

  const renderTransactionList = (transactionList: Transaction[]) => (
    <div className="">
      {transactionList.length > 0 ? (
        transactionList.map((transaction, index) => renderTransaction(transaction, index))
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center h-32">
          <img
            src={history}
            alt="No transactions"
            className="size-[40px] sm:size-[60px] lg:size-[80px]"
          />
          <h2 className="text-primary/70">{emptyStateMessage}</h2>
        </div>
      )}
    </div>
  );

  return (
    <div className={className}>
      {heading && (
        <div className="flex justify-between items-center py-2">
          <h1 className="font-[600] text-[20px] text-primary">{heading}</h1>
          {showViewAll && (
            <Link
              to={viewAllLink}
              className="text-xs text-[#1C274C] font-medium hover:underline flex gap-[2px] items-center"
            >
              View all
              <ChevronRight className="size-[16px] text-primary/70" />
            </Link>
          )}
        </div>
      )}

      {groupByDate && groupedTransactions ? (
        <div className="space-y-6">
          {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
            <div key={date} className="space-y-3">
              <h3 className="text-[14px] font-medium text-[#666] border-b border-gray-100 pb-2">
                {date}
              </h3>
              {renderTransactionList(dateTransactions)}
            </div>
          ))}
        </div>
      ) : (
        renderTransactionList(transactions)
      )}

      <TransactionDetails transaction={{
        type: (() => {
          if (!transactions.length) return "order-purchase";
          const randomIndex = Math.floor(Math.random() * transactions.length);
          const t = transactions[randomIndex];
          if (t.status === "remittance") {
            return t.isCredit ? "remittance-inflow" : "remittance-paid";
          } else if (t.status === "withdrawal") {
            return "withdrawal";
          } else {
            return "order-purchase";
          }
        })(),
        amount: "£1000",
        time: "2025-01-01T00:00:00",
        from: "John Doe",
        to: "Jane Doe",
        orderId: "1234567890",
        availableBalance: "£1000",
      }} />

    </div>
  );
};

export default TransactionList; 