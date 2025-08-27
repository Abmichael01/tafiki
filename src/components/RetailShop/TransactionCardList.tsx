import React from "react";
import { RemittanceHistory } from "@/types/admin";
import RemittanceCard from "@/components/Admin/Overview/RemittanceCard";
import { TrendingUp } from "lucide-react";
import history from "@/assets/svgs/history.svg";

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
    <div className="space-y-[12px]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[18px]">{title}</h1>
        <span className="text-sm text-gray-500">
          {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* RemittanceCard List */}
      <div className="bg-white rounded-lg">
        {transactions.length > 0 ? (
          <div className="divide-y divide-[#F0F0F0]">
            {transactions.map((transaction) => (
              <RemittanceCard 
                key={transaction.remittance_id} 
                remittance={transaction}
                showFrom={false}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5 justify-center items-center h-40 p-6">
            <img
              src={history}
              alt="No history"
              className="size-[40px] sm:size-[60px] lg:size-[80px]"
            />
            <h2 className="text-primary/70">{emptyMessage}</h2>
          </div>
        )}
      </div>
    </div> 
  );
};

export default TransactionCardList;
