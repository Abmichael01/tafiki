import { RemittanceHistory } from "@/types/admin";
import RemittanceCard from "../../Overview/RemittanceCard";
import { ChevronRight } from "lucide-react";
import history from "@/assets/svgs/history.svg";

// Transaction data for demo (replace with real data as needed)
// const transactions = [
//   {
//     type: "Remittance - Order #5210",
//     time: "2025-01-21T08:12:00",
//     amount: "£2350",
//     status: "remittance",
//   },
//   {
//     type: "Remittance - Order #5211",
//     time: "2025-01-21T10:45:00",
//     amount: "£1800",
//     status: "remittance",
//   },
//   {
//     type: "Remittance - Order #5212",
//     time: "2025-01-20T14:20:00",
//     amount: "£3200",
//     status: "remittance",
//   },
//   {
//     type: "Remittance - Order #5213",
//     time: "2025-01-19T11:15:00",
//     amount: "£950",
//     status: "remittance",
//   },
//   {
//     type: "Remittance - Order #5214",
//     time: "2025-01-18T09:30:00",
//     amount: "£2100",
//     status: "remittance",
//   },
// ];


interface TransactionsProps {
  data?: RemittanceHistory[];
  showViewAll?: boolean;
}

export default function Transactions({ data, showViewAll = true }: TransactionsProps) {
  return (
    <div className="space-y-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[18px]">Transactions</h1>
        {showViewAll && data && data.length > 0 && (
          <button className="hover:underline font-medium text-[14px] flex gap-[1px] items-center">
            View all
            <ChevronRight className="h-[15px] text-[#494949]" />
          </button>
        )}
      </div>

      <div className="bg-white">
        {data && data.length > 0 ? (
          <div className="divide-y divide-[#F0F0F0]">
            {data.slice(0, 4).map((remittance) => (
              <RemittanceCard 
                key={remittance.remittance_id} 
                remittance={remittance} 
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
};

