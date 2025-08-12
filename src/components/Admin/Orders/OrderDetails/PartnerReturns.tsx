import React from "react";
import { CheckCircle2 } from "lucide-react";
import { RoiCycle } from "@/types/admin";


interface PartnerReturnsProps {
  roiData: RoiCycle[];
  roiPercentage: number; // Optional: if you want to pass a dynamic percentage.
}

const PartnerReturns: React.FC<PartnerReturnsProps> = ({ roiData, roiPercentage }) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Total expected return calculation (if necessary, can be adjusted)
  const totalExpectedReturn = roiData?.reduce((sum, cycle) => sum + cycle.amount, 0);

  return (
    <div className="space-y-4">
      {/* Title */}
      <h2 className="text-[14px] font-medium text-muted-foreground">
        Partner's returns cycle
      </h2>

      {/* Total Expected Return */}
      <div className="flex justify-between items-center bg-green-100 px-4 py-2 rounded-sm font-satoshi">
        <span className="text-green-700 font-semibold text-sm">
          Total Expected Return: {roiPercentage}%
        </span>

        <div className="flex gap-1 items-center">
          <span className="text-green-700 font-semibold text-base">
            £{totalExpectedReturn?.toLocaleString()}
          </span>
          <div className="bg-[#15221B]/20 gap-[1px] flex items-center text-white text-xs px-[3px] py-[1px] rounded-full font-medium">
            Paid
            <CheckCircle2 className="size-[14px] fill-white text-[#15221B]/20" />
          </div>
        </div>
      </div>

      {/* ROI Cycles */}
      <ul className="space-y-2 list-disc ml-5">
        {roiData?.map((cycle) => (
          <li key={cycle?.cycle}>
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-[#6E6E6E]">
                Cycle {cycle.cycle}: {formatDate(cycle?.payout_date)} (+{roiPercentage}% to Portfolio)
              </span>
              <span className="font-medium text-nowrap">+£{cycle.amount?.toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerReturns;
