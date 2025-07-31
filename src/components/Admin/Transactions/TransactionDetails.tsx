import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { Plus, Minus, Upload, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCloseDialog } from "@/hooks/closeDialog";

export interface TransactionDetailData {
  type: "remittance-inflow" | "remittance-paid" | "withdrawal" | "order-purchase";
  amount: string;
  time: string;
  from?: string;
  to?: string;
  orderId?: string;
  availableBalance: string;
  isCredit?: boolean;
}

interface TransactionDetailsProps {
  transaction?: TransactionDetailData;
  onViewOrder?: () => void;
}

export default function TransactionDetails({ 
  transaction, 
  onViewOrder 
}: TransactionDetailsProps) {
  const closeDialog = useCloseDialog("transaction-details");
  if (!transaction) return null;

  const getTransactionIcon = () => {
    switch (transaction.type) {
      case "remittance-inflow":
        return <Plus className="size-5 text-[#16A34A]" />;
      case "remittance-paid":
        return <Minus className="size-5 text-[#B52217]" />;
      case "withdrawal":
        return <Upload className="size-5 text-white" />;
      case "order-purchase":
        return <Package className="size-5 text-white" />;
      default:
        return <Plus className="size-5 text-white" />;
    }
  };

  const getTransactionTitle = () => {
    switch (transaction.type) {
      case "remittance-inflow":
        return "Remittance Inflow";
      case "remittance-paid":
        return "Remittance Paid";
      case "withdrawal":
        return "Withdrawal";
      case "order-purchase":
        return "Order Purchase";
      default:
        return "Transaction";
    }
  };

  const getIconBackgroundColor = () => {
    switch (transaction.type) {
      case "remittance-inflow":
        return "bg-green-100";
      case "remittance-paid":
        return "bg-red-100";
      case "withdrawal":
        return "bg-blue-100";
      case "order-purchase":
        return "bg-blue-100";
      default:
        return "bg-green-100";
    }
  };

  const getIconColor = () => {
    switch (transaction.type) {
      case "remittance-inflow":
        return "text-green-600";
      case "remittance-paid":
        return "text-red-600";
      case "withdrawal":
        return "text-blue-600";
      case "order-purchase":
        return "text-blue-600";
      default:
        return "text-green-600";
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const timePart = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    
    const getOrdinal = (n: number) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    
    return `${timePart}, ${day}${getOrdinal(day)} ${month}. ${year}`;
  };

  return (
    <GlobalDialog dialogName="transaction-details">
      <DialogContent className="max-w-[546px] p-0 bg-white rounded-lg">
        {/* Header */}
        <div className="flex flex-col items-center pt-8 pb-6 px-6">
          <div className={`p-3 rounded-full ${getIconBackgroundColor()} mb-4`}>
            <div className={`${getIconColor()}`}>
              {getTransactionIcon()}
            </div>
          </div>
          <h2 className="font-semibold text-xl text-gray-800">
            {getTransactionTitle()}
          </h2>
        </div>

        {/* Amount Section */}
        <div className="px-6 pb-6 font-satoshi">
          <div className={`border-2 border-dashed border-[#15221B99] rounded-lg p-6 text-center`}>
            <div className="text-sm text-gray-500 mb-2">Amount</div>
            <div className="text-3xl font-bold text-gray-800">{transaction.amount}</div>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="px-6 pb-6 space-y-4 font-satoshi">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Time and Date:</span>
            <span className="text-sm font-[700] text-gray-800 text-right">
              {formatTime(transaction.time)}
            </span>
          </div>

          {transaction.from && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">From:</span>
              <span className="text-sm font-[700] text-gray-800 text-right">
                {transaction.from}
              </span>
            </div>
          )}

          {/* {transaction.to && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">To:</span>
              <span className="text-sm font-medium text-gray-800 text-right">
                {transaction.to}
              </span>
            </div>
          )} */}

          {transaction.orderId && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Order ID:</span>
              <span className="text-sm font-[700] text-gray-800 text-right">
                {transaction.orderId}
              </span>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {transaction.type === "remittance-paid" ? "Balance:" : "Available Balance:"}
            </span>
            <span className="text-sm font-[700] text-gray-800 text-right">
              {transaction.availableBalance}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-6 pb-6">
          <Button
            onClick={transaction.type === "order-purchase" ? onViewOrder : closeDialog}
            className="w-full"
          >
            {transaction.type === "order-purchase" ? "View order" : "Done"}
          </Button>
        </div>
      </DialogContent>
    </GlobalDialog>
  );
}