import { getWalletTransactions } from "@/api/apiEndpoints";
import History from "@/components/PartnerDashboard/Portfolio/History";
import OverviewCard from "@/components/PartnerDashboard/Portfolio/OverviewCard";
import SelectPage from "@/components/PartnerDashboard/Portfolio/SelectPage";
import { Separator } from "@/components/ui/separator";
import { useDialogStore } from "@/stores/dialogStore";
import useUserDetailsStore from "@/stores/userStore";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import { WalletTransaction } from '@/types';


const Wallet: React.FC = () => {
  const { openDialog } = useDialogStore();
  const { userDetails } = useUserDetailsStore()
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
          case "withdrawal":
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
        amount: `${sign}£${parseFloat(transaction.amount).toFixed(2)}`
      };
    });
  };

  const formattedTransactions = data 
    ? formatTransactions(data.results.transactions)
    : [];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/portfolio">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Wallet</h1>
        </div>
        <SelectPage />
      </div>
      <div className="flex justify-center">
        <OverviewCard className=" w-full md:w-[698px]">
          <h1 className="text-[#FFFFFFCC] text-[14px] text-center">Balance</h1>
          <div className="text-center font-satoshi">
            <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
              {" "}
              <span className=" text-[18px] text-[#FFFFFF99]">£</span> {userDetails?.wallet_balance}
            </h1>
            <h1 className="text-[12px]">
              {" "}
              <span className="text-[#16A34A]">+5.16%</span> (+£105) Today
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 justify-center gap-[20px] w-[50%]">
            <div 
            onClick={() => openDialog("withdrawFromWallet")}
            className="text-center flex flex-col py-[4px] gap-[2px] items-center float-right cursor-pointer">
                    <FiUpload className="size-[15px]" />
                    <h1 className="text-[12px]">Withdraw</h1>
                  </div>
              <div className="flex justify-center">
                <Separator orientation="vertical" className="h-[75%]" />
              </div>
              <div 
              onClick={() => openDialog("fundWallet")}
              className="text-center flex flex-col py-[4px]  gap-[2px] items-center cursor-pointer">
                <FaPlus className="size-[15px]" />
                <h1 className="text-[12px]">Fund</h1>
              </div>
            </div>
          </div>
        </OverviewCard>
      </div>
      <History heading="Transactions" data={formattedTransactions} />
    </div>
  );
};

export default Wallet;
