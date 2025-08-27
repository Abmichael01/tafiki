import Info from "@/components/Admin/Vendors/VendorDetails/Info";
import { RemittanceHistory } from "@/types/admin";
import PageTitle from "@/components/ui/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { getVendor } from "@/api/adminEndpoints";
import { Vendor } from "@/types/admin";
import { useParams } from "react-router-dom";
// import TransactionList from "@/components/Admin/Transactions/TransactionList";
import LoadingData from "@/components/Admin/LoadingData";
import TransactionList from "@/components/Admin/Vendors/VendorDetails/Transactions";
import { Separator } from "@/components/ui/separator";

export default function Transactions() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["vendor", id],
    queryFn: () => getVendor(id as string),
  });

  if (isLoading) return <LoadingData />;
  return (
    <div className="space-y-10">
      <PageTitle
        title="Transactions"
        subtitle={data?.vendor_details?.store_name}
        showBack={true}
        backLink={`/admin/vendors/${id}`}
      />
      <Info data={data?.vendor_details as Vendor} />
      <Separator />
      <TransactionList
        data={data?.vendor_details?.transactions as RemittanceHistory[]}
        showViewAll={false}
      />
    </div>
  );
}
