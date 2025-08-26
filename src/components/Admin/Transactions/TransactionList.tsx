import React from "react";
import {
  ChevronRight,
  Upload,
  Plus,
  ArrowUpRight,
  Package,
} from "lucide-react";
import history from "@/assets/svgs/history.svg";
import { Link } from "react-router-dom";
import TransactionDetails from "./TransactionDetails";
import { Transaction } from "@/types/admin";
import { formatDisplayTime } from "@/lib/formatDateTime";

// Transaction type based on the provided data structure

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
  const [selected, setSelected] = React.useState<Transaction | null>(null);
  // Helper function to format date for display
  const formatDisplayDate = (dateString: string) => {
    const transactionDate = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Reset time to compare only dates
    const transactionDateOnly = new Date(
      transactionDate.getFullYear(),
      transactionDate.getMonth(),
      transactionDate.getDate()
    );
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const yesterdayOnly = new Date(
      yesterday.getFullYear(),
      yesterday.getMonth(),
      yesterday.getDate()
    );

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

  // Group transactions by date if groupByDate is true
  const groupedTransactions = groupByDate
    ? transactions?.reduce((groups, transaction) => {
        const displayDate = formatDisplayDate(transaction.created_at);

        if (!groups[displayDate]) {
          groups[displayDate] = [];
        }
        groups[displayDate].push(transaction);
        return groups;
      }, {} as Record<string, Transaction[]>)
    : null;

  // Helper to determine if transaction is credit or debit

  // Compose a "type" label from the transaction data
  const getTypeLabel = (transaction: Transaction) => {
    // Example: "Investment from Available Balance"
    if (
      transaction.transaction_type &&
      transaction.from_user &&
      transaction.to
    ) {
      return `${capitalize(transaction.transaction_type)} from ${
        transaction.from_user
      } to ${transaction.to}`;
    }
    if (transaction.transaction_type && transaction.from_user) {
      return `${capitalize(transaction.transaction_type)} from ${
        transaction.from_user
      }`;
    }
    return transaction.transaction_type
      ? capitalize(transaction.transaction_type)
      : "Transaction";
  };

  function capitalize(str: string) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Compose a description if needed
  // const getDescription = (transaction: Transaction) => {
  //   // Example: "Order ID: TXN-E453CB00B4, Partner: Oyekola Michael"
  //   const desc = [];
  //   if (transaction.order_id) desc.push(`Order ID: ${transaction.order_id}`);
  //   if (transaction.partner_name) desc.push(`Partner: ${transaction.partner_name}`);
  //   if (transaction.payment_method) desc.push(`Payment: ${capitalize(transaction.payment_method)}`);
  //   if (transaction.reference) desc.push(`Ref: ${transaction.reference}`);
  //   return desc.join(" | ");
  // };

  const handleSelect = (t: Transaction) => setSelected(t);

  const renderTransaction = (transaction: Transaction, index: number) => (
    <Link
      key={transaction.id || index}
      className="flex justify-between items-center py-3"
      to={`?dialog=transaction-details`}
      onClick={() => handleSelect(transaction)}
    >
      <div className="flex gap-3 items-center min-w-0 flex-1">
        <div
          className={`flex items-center justify-center rounded-full size-10 ${
            transaction.status?.toLowerCase() === "pending" &&
            (transaction.transaction_type === "fund" ||
              transaction.transaction_type === "withdraw")
              ? "bg-[#FFA5001A] text-[#FFA500]" // Orange for pending (only for fund/withdraw)
              : transaction.transaction_type === "inflow" ||
                transaction.transaction_type === "fund"
              ? "bg-[#16A34A1A] text-[#16A34A]"
              : transaction.transaction_type === "withdraw"
              ? "bg-[#B522171A] text-[#B52217]"
              : "bg-primary/10 text-primary"
          }`}
        >
          {transaction.transaction_type === "withdraw" ? (
            <Upload className="size-[20px]" />
          ) : transaction.transaction_type === "remittance-inflow" ? (
            <Plus className="size-[20px]" />
          ) : transaction.transaction_type === "fund" ? (
            <Plus className="size-[20px]" />
          ) : transaction.transaction_type === "investment" ? (
            <Package className="size-[20px]" />
          ) : !vendor ? (
            <Plus className="size-[20px]" />
          ) : (
            <ArrowUpRight className="size-[20px]" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-satoshi font-[600] text-[15px] truncate text-nowrap">
            {getTypeLabel(transaction)}
          </div>
          {/* <div className="text-[12px] text-[#666] font-satoshi">
            {getDescription(transaction)}
          </div> */}
          <div className="text-[12px] text-[#929292] font-satoshi truncate text-nowrap">
            {formatDisplayTime(transaction.created_at)}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          {(transaction.transaction_type === "fund" ||
            transaction.transaction_type === "withdraw") &&
            showTransactionSign && (
              <span className="text-[12px] font-medium mr-1 flex items-center justify-center h-full">
                {transaction.transaction_type === "fund" ? "+" : "-"}
              </span>
            )}
          <div className="font-satoshi font-bold text-[15px] text-nowrap text-primary">
            £{Number(transaction.amount).toLocaleString("en-GB")}
          </div>
        </div>
        {(transaction.transaction_type === "fund" ||
          transaction.transaction_type === "withdraw") &&
          transaction.status?.toLowerCase() === "pending" && (
            <span className="text-[12px] font-medium text-[#FFA500] mt-1">
              Pending
            </span>
          )}
      </div>
    </Link>
  );

  const renderTransactionList = (transactionList: Transaction[]) => (
    <div>
      {transactionList?.length > 0 ? (
        transactionList.map((transaction, index) =>
          renderTransaction(transaction, index)
        )
      ) : (
        <div className="flex flex-col gap-3 lg:gap-5 justify-center items-center min-h-[100px] h-full">
          <img
            src={history}
            alt="No transactions"
            className="size-[30px] sm:size-[40px] lg:size-[60px]"
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
          {showViewAll && transactions?.length !== 0 && (
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
          {Object.entries(groupedTransactions).map(
            ([date, dateTransactions]) => (
              <div key={date} className="space-y-3">
                <h3 className="text-[14px] font-medium text-[#666] border-b border-gray-100 pb-2">
                  {date}
                </h3>
                {renderTransactionList(dateTransactions)}
              </div>
            )
          )}
        </div>
      ) : (
        renderTransactionList(transactions)
      )}

      {/* Example TransactionDetails, you may want to pass real data */}
      <TransactionDetails
        transaction={
          selected
            ? {
                type: selected.transaction_type,
                amount: String(selected.amount ?? "0.00"),
                time: selected.created_at ?? new Date().toISOString(),
                from: selected.from_user,
                to: selected.to,
                orderId: (selected as unknown as { order_id?: string })
                  .order_id,
                availableBalance: String(
                  selected.available_balance_at_time ?? ""
                ),
              }
            : undefined
        }
      />
    </div>
  );
};

export default TransactionList;
