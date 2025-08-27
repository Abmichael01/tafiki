import React from "react";
import { RemittanceHistory } from "@/types/admin";
// import { ChevronRight } from "lucide-react";
import RemittanceCard from "./RemittanceCard";
import history from "@/assets/svgs/history.svg";

interface RemittanceInflowProps {
  remittanceHistory: RemittanceHistory[];
}

const RemittanceInflow: React.FC<RemittanceInflowProps> = ({ remittanceHistory }) => {
  return (
    <div className="space-y-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[18px]">Remittance Inflow</h1>
        {/* <button className="hover:underline font-medium text-[14px] flex gap-[1px] items-center">
          View all
          <ChevronRight className="h-[15px] text-[#494949]" />
        </button> */}
      </div>

      <div className="bg-white ">
        {remittanceHistory.length > 0 ? (
          <div className="divide-y divide-[#F0F0F0]">
            {remittanceHistory.slice(0, 4).map((remittance) => (
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
            <h2 className="text-primary/70">You have no remittance history</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemittanceInflow;
