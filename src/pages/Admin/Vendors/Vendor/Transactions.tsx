import Info from "@/components/Admin/Vendors/VendorDetails/Info";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Transaction } from "@/types/admin";
import PageTitle from "@/components/ui/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { getVendor } from "@/api/adminEndpoints";
import { Vendor } from "@/types/admin";
import { useParams } from "react-router-dom";
import TransactionList from "@/components/Admin/Transactions/TransactionList";
import LoadingData from "@/components/Admin/LoadingData";

export default function Transactions() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["vendor", id],
    queryFn: () => getVendor(id as string),
  });

  if (isLoading) return <LoadingData />;
  return (
    <div className="space-y-10">
      <PageTitle subtitle="John Doe" title="Transactions" showBack={true} />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Info data={data?.vendor_details as Vendor} />
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
      <TransactionList
        transactions={[] as Transaction[]}
        heading="Transactions"
        showViewAll={false}
        viewAllLink="/admin/vendors/1/transactions"
        vendor={true}
      />
    </div>
  );
}
