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

export default function Transactions() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["partner", id],
    queryFn: () => getPartner(id as string),
  });

  const trasactions = data?.transactions;

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-10">
      <PageTitle title="Transactions" subtitle={data?.partner.name} showBack={true} />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Info data={data?.partner as Partner} />
        <div className="">
          <Select
            defaultValue="all"
            onValueChange={(value) => {
              // Debug: print selected filter
              console.log("Selected filter:", value);
            }}
          >
            <SelectTrigger className="w-fit min-w-[100px] rounded-[4px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="remittance">Remittance</SelectItem>
              <SelectItem value="withdrawal">Withdrawal</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <TransactionsList data={trasactions} showViewAll={false} />
    </div>
  );
}
