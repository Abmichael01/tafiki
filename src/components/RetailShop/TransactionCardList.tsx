import React from "react";
import { RemittanceHistory } from "@/types/admin";
import TransactionCard from "./TransactionCard";
import { TrendingUp } from "lucide-react";

interface TransactionCardListProps {
  transactions: RemittanceHistory[];
  title?: string;
  emptyMessage?: string;
}

const TransactionCardList: React.FC<TransactionCardListProps> = ({ 
  transactions, 
  title = "Transactions", 
  emptyMessage = "No transactions found" 
}) => {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <TrendingUp className="h-16 w-16 text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-500 mb-2">{title}</h3>
        <p className="text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <span className="text-sm text-gray-500">
          {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.remittance_id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionCardList;
