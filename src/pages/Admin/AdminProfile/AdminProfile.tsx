import { getOverview } from "@/api/adminEndpoints";
import Links from "@/components/Admin/AdminProfile/Links";
import Logout from "@/components/Admin/AdminProfile/Logout";
import ResetPassword from "@/components/Admin/AdminProfile/ResetPassword";
import LoadingData from "@/components/Admin/LoadingData";
import Cards from "@/components/Admin/Overview/Cards";
import PageTitle from "@/components/ui/PageTitle";
import { useQuery } from "@tanstack/react-query";

export default function AdminProfile() {
  const { data, isLoading } = useQuery({
    queryKey: ["overview"],
    queryFn: getOverview,
  });

  console.log(data);

  if (isLoading) return <LoadingData />;
  return (
    <div className="space-y-10">
      <PageTitle title="Admin" />
      <Cards
        todays_remittance={data?.todays_remittance}
        total_balance={data?.total_balance}
        pending_withdrawals={data?.pending_withdrawals}
      />
      <Links />
      <Logout />
      <ResetPassword />
    </div>
  );
}
