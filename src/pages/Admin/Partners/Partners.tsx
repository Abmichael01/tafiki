import { getAdminReport } from "@/api/adminEndpoints";
import DueForRemittance from "@/components/Admin/Partners/DueForRemittance";
import Overview from "@/components/Admin/Partners/Overview";
import PartnerList from "@/components/Admin/Partners/PartnersList";
import PageTitle from "@/components/ui/PageTitle";
import { AdminReport, Partner } from "@/types/admin";
import { useQuery } from "@tanstack/react-query";

export default function Partners() {
  const { data } = useQuery({
    queryKey: ["admin-report"],
    queryFn: getAdminReport,
  });

  console.log(data);
  return (
    <div className="space-y-10 h-full w-full">
      <PageTitle title="Partners" />
      <Overview data={data as AdminReport} />
      <PartnerList data={data?.partners as Partner[]} />
      <DueForRemittance />
    </div>
  );
}
