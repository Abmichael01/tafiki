import React from "react";
import { CartItem as CartItemType } from "@/types";
import { cn } from "@/lib/utils";

interface CartSummaryProps {
  items: CartItemType[];
  summary?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  items,
  summary = true,
}) => {
  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.total_amount, 0);
  const totalExpectedReturns = items.reduce(
    (sum, item) => sum + item.total_roi,
    0
  );
  const roiPercentage = items.length > 0 ? items[0].roi_percentage : 0; // Assuming same ROI for all items

  // Get all ROI cycles from all items
  const allRoiCycles = items.flatMap((item) =>
    item.roi_cycles.map((cycle) => ({
      ...cycle,
      product_name: item.product_name,
    }))
  );

  // Group cycles by cycle number and sum amounts
  const groupedCycles = allRoiCycles.reduce((acc, cycle) => {
    const key = cycle.cycle;
    if (!acc[key]) {
      acc[key] = {
        cycle: cycle.cycle,
        amount: 0,
        payout_date: cycle.payout_date,
      };
    }
    acc[key].amount += cycle.amount;
    return acc;
  }, {} as Record<number, { cycle: number; amount: number; payout_date: string }>);

  const sortedCycles = Object.values(groupedCycles).sort(
    (a, b) => a.cycle - b.cycle
  ).map((cycle, index, array) => ({
    ...cycle,
    start_date: index === 0 ? new Date().toISOString().split('T')[0] : array[index - 1].payout_date
  }));

  const formatCurrency = (amount: number) => {
    return `£${amount.toLocaleString('en-GB')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (items.length === 0) return null;

  return (
    <div className={cn(
        "rounded-[6px] space-y-[8px]",
        summary && "p-[20px] bg-[#F9F9F9]"
    )}>
      {/* Subtotal */}
      {summary && (
        <div className="flex justify-between items-center">
          <span className="text-[16px] font-satoshi font-[700] text-[#6E6E6E]">
            Subtotal
          </span>
          <span className="text-[20px] font-satoshi font-[700]">
            {formatCurrency(subtotal)}
          </span>
        </div>
      )}

      {/* Total Expected Returns */}
      <div className="flex justify-between items-center bg-[#16A34A0A] py-2 px-2">
        <span className="text-[14px] text-green-600">
          Total Expected Returns: {roiPercentage}%
        </span>
        <span className="text-[16px] font-semibold text-green-600">
          {formatCurrency(totalExpectedReturns)}
        </span>
      </div>

      {/* ROI Cycles */}
      <ul className="space-y-[8px] list-disc ml-4 font-satoshi">
        {sortedCycles.map((cycle) => (
          <li key={cycle.cycle} className="text-[14px]">
            <div className="flex justify-between gap-4 items-center">
              <span className="text-[#6E6E6E]">
              Cycle {cycle.cycle}: {formatDate(cycle.start_date)} -{" "}
              {formatDate(cycle.payout_date)} (+{roiPercentage}% to Account Inflow)
              </span>
              <span className="font-medium text-nowrap">
              +{formatCurrency(cycle.amount)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSummary;
