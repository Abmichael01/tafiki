import React from "react";
import { RemittanceHistory } from "@/types/admin";
import { FiPlus } from "react-icons/fi";
import { formatDisplayTime } from "@/lib/formatDateTime";

interface RemittanceCardProps {
  remittance: RemittanceHistory;
}

const RemittanceCard: React.FC<RemittanceCardProps> = ({ remittance }) => {
  const { vendor_name, amount, status, created_at } = remittance;
  
  const statusColor = status === "completed" ? "text-[#16A34A]" : "text-[#F59E0B]";
  const statusBg = status === "completed" ? "bg-[#16A34A1A]" : "bg-[#F59E0B1A]";

  return (
    <div className="flex justify-between items-center py-[12px] border-b border-[#F0F0F0] last:border-b-0">
      <div className="flex gap-[16px] items-center">
        <div className={`p-2 rounded-full ${statusBg} ${statusColor}`}>
          <FiPlus className="size-[15px]" />
        </div>
        <div className="font-satoshi">
          <h1 className="text-[16px] font-medium">Remittance</h1>
          <p className="text-[12px] text-gray-500">
            from {vendor_name}
          </p>
          <p className="text-[10px] text-gray-400">
            {formatDisplayTime(created_at, { showYear: false, isRelative: true })}
          </p>
        </div>
      </div>
      <div className="text-right">
        <h1 className="text-[16px] font-[700] font-satoshi">
          +£{amount.toLocaleString('en-GB')}
        </h1>
      </div>
    </div>
  );
};

export default RemittanceCard;
