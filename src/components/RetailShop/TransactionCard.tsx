import React from "react";
import { Transaction } from "@/types/admin";
import { formatDisplayTime } from "@/lib/formatDateTime";
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle } from "lucide-react";

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const getTransactionIcon = (type: string) => {
    // For vendors, all transactions are remittances
    return <TrendingUp className="h-5 w-5 text-green-600" />;
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "failed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // For vendors, all transactions are remittances (incoming)
  const isCredit = true;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {getTransactionIcon(transaction.transaction_type)}
          <div>
                         <h3 className="font-semibold text-lg text-gray-900">
               Remittance
             </h3>
            <p className="text-sm text-gray-500">
              {transaction.partner_name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {getStatusIcon(transaction.status)}
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(transaction.status)}`}>
            {transaction.status}
          </span>
        </div>
      </div>

      {/* Amount */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Amount:</span>
          <span className={`text-xl font-bold ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
            {isCredit ? '+' : '-'}₦{Number(transaction.amount).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="space-y-2 mb-4">
        {transaction.order_id && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Order ID:</span>
            <span className="font-medium">{transaction.order_id}</span>
          </div>
        )}
        
        {transaction.payment_method && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-medium capitalize">{transaction.payment_method}</span>
          </div>
        )}
        
        {transaction.reference && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Reference:</span>
            <span className="font-medium font-mono text-xs">{transaction.reference}</span>
          </div>
        )}
        
        {transaction.available_balance_at_time && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Balance at time:</span>
            <span className="font-medium">₦{Number(transaction.available_balance_at_time).toLocaleString()}</span>
          </div>
        )}
      </div>

      {/* Date */}
      <div className="pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {formatDisplayTime(transaction.created_at)}
          </span>
          <span className="text-xs text-gray-500">
            ID: {transaction.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
