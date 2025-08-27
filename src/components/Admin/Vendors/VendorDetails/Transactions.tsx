import { RemittanceHistory } from "@/types/admin";
import RemittanceCard from "../../Overview/RemittanceCard";
import { ChevronRight } from "lucide-react";
import history from "@/assets/svgs/history.svg";
import { Link, useParams } from "react-router-dom";

interface TransactionsProps {
  data?: RemittanceHistory[];
  showViewAll?: boolean;
}

export default function Transactions({
  data,
  showViewAll = true,
}: TransactionsProps) {
  const { id } = useParams();
  return (
    <div className="space-y-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[18px]">Transactions</h1>
        {showViewAll && data && data.length > 0 && (
          <Link to={`/admin/vendors/${id}/transactions`}>
            <button className="hover:underline font-medium text-[14px] flex gap-[1px] items-center">
              View all
              <ChevronRight className="h-[15px] text-[#494949]" />
            </button>
          </Link>
        )}
      </div>

      <div className="bg-white">
        {data && data.length > 0 ? (
          <div className="divide-y divide-[#F0F0F0]">
            {data.slice(0, 4).map((remittance) => (
              <RemittanceCard
                key={remittance.remittance_id}
                remittance={remittance}
                showFrom={false}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5 justify-center items-center h-40 p-6">
            <img
              src={history}
              alt="No history"
              className="size-[40px] sm:size-[60px] lg:size-[80px]"
            />
            <h2 className="text-primary/70">No remittance history</h2>
          </div>
        )}
      </div>
    </div>
  );
}
