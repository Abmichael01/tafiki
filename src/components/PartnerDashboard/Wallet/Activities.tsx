import { useQuery } from "@tanstack/react-query";
import React from "react";
import { WalletTransaction } from '@/types';
import { getWalletTransactions } from "@/api/apiEndpoints";
import { format } from 'date-fns';
import History from "../Portfolio/History";

interface Props {
    title: string;
}

const Activities: React.FC<Props> = ({ title }) => {
    const  { data } = useQuery({
        queryKey: ["walletTransactions"],
        queryFn: getWalletTransactions
      })
    
      console.log(data)
    
      const formatTransactions = (transactions: WalletTransaction[] = []) => {
        return transactions.map(transaction => {
          // Determine transaction type and sign
          const isInflow = transaction.transaction_type === "fund";
          const sign = isInflow ? "+" : "-";
          
          // Format the type label
          const typeLabel = (() => {
            switch (transaction.transaction_type) {
              case "fund":
                return "Wallet Funding";
              case "withdraw":
                return "Withdrawal";
              case "investment":
                return "Investment";
              default:
                return transaction.transaction_type;
            }
          })();
    
          return {
            type: typeLabel,
            time: format(new Date(transaction.created_at), "H:mma, do MMM. yyyy"),
            amount: `${sign}£${parseFloat(transaction.amount).toFixed(2)}`,
            status: transaction.status,
          };
        });
      };
    
      const formattedTransactions = data 
        ? formatTransactions(data.results.transactions)
        : [];
  return (
    <History heading={title} data={formattedTransactions} />
  )
}

export default Activities