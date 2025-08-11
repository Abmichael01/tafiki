import { getTransactions } from "@/api/adminEndpoints";
import LoadingData from "@/components/Admin/LoadingData";
import TransactionsList from "@/components/Admin/Transactions/TransactionList";
import PageTitle from "@/components/ui/PageTitle";
import { Transaction } from "@/types/admin";
import { useQuery } from "@tanstack/react-query";




export default function Transactions() {
  const { data, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions
  })

  if(isLoading) return <LoadingData />

  console.log(data)
    return (
        <div className="space-y-10">
            <PageTitle title="Transactions" />
            <TransactionsList transactions={data?.results as Transaction[] } vendor={false} groupByDate={true} />
        </div>
    );
}