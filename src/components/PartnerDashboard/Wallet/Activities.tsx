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

          // Format the type label with pending logic for all types
          let typeLabel: string;
          if (transaction.status === "pending") {
            if (transaction.transaction_type === "fund") {
              typeLabel = "Pending Wallet Funding";
            } else if (transaction.transaction_type === "withdraw") {
              typeLabel = "Pending Withdrawal";
            } else {
              // For any other transaction type, show "Pending" + type
              typeLabel = `Pending ${transaction.transaction_type.charAt(0).toUpperCase() + transaction.transaction_type.slice(1)}`;
            }
          } else {
            switch (transaction.transaction_type) {
              case "fund":
                typeLabel = "Wallet Funding";
                break;
              case "withdraw":
                typeLabel = "Withdrawal";
                break;
              case "investment":
                typeLabel = "Investment";
                break;
              default:
                typeLabel = transaction.transaction_type;
            }
          }

          return {
            type: typeLabel,
            time: format(new Date(transaction.created_at), "H:mma, do MMM. yyyy"),
            amount: `${sign}£${parseFloat(transaction.amount).toLocaleString('en-GB')}`,
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