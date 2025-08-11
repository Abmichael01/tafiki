import { getWithdrawalList } from "@/api/adminEndpoints";
import WithdrawalRequests from "@/components/Admin/Partners/WithdrawalRequest/WithdrawalRequest";
import { WithdrawalData } from "@/types/admin";
import { useQuery } from "@tanstack/react-query";


export default function WithdrawalRequest() {
  const { data } = useQuery({
    queryKey: ["withdrawal-requests-ooo"],
    queryFn: getWithdrawalList
  })

  console.log(data)
  return (
    <div className="space-y-10">
      <WithdrawalRequests data={[] as WithdrawalData[]} all />
    </div>
  );
}
