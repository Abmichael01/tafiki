import Info from "@/components/Admin/Partners/PartnerDetails/Info";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TransactionsList from "@/components/Admin/Partners/PartnerDetails/Transactions";
import PageTitle from "@/components/ui/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { getPartner } from "@/api/adminEndpoints";
import LoadingData from "@/components/Admin/LoadingData";
import { useParams } from "react-router-dom";
import { Partner } from "@/types/admin";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Transactions() {
  const { id } = useParams();
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const { data, isLoading } = useQuery({
    queryKey: ["partner", id],
    queryFn: () => getPartner(id as string),
  });

  const allTransactions = data?.transactions || [];
  
  // Filter transactions based on selected type
  const filteredTransactions = allTransactions.filter(transaction => {
    if (selectedFilter === "all") return true;
    
    // Map filter values to transaction types
    switch (selectedFilter) {
      case "fund":
        return transaction.transaction_type === "fund";
      case "investment":
        return transaction.transaction_type === "investment";
      case "remittance":
        return transaction.transaction_type === "remittance";
      case "withdraw":
        return transaction.transaction_type === "withdraw" || transaction.transaction_type === "withdrawal";
      default:
        return true;
    }
  });

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-10">
      <PageTitle
        title="Transactions"
        subtitle={data?.partner?.name}
        showBack={true}
        backLink={`/admin/partners/${id}`}
      />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Info data={data?.partner as Partner} />
        <div className="flex items-center gap-4">
          <Select
            value={selectedFilter}
            onValueChange={(value) => {
              setSelectedFilter(value);
            }}
          >
            <SelectTrigger className="w-fit min-w-[100px] rounded-[4px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="fund">Funding</SelectItem>
              <SelectItem value="investment">Investment</SelectItem>
              <SelectItem value="remittance">Remittance</SelectItem>
              <SelectItem value="withdraw">Withdrawal</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator />
      <TransactionsList data={filteredTransactions} showViewAll={false} />
    </div>
  );
}
