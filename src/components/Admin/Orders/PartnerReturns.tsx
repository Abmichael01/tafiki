import { CheckCircle2 } from "lucide-react";

export default function PartnerReturns() {
  return (
    <div className="space-y-4 ">
      {/* Title */}
      <h2 className="text-[14px] font-medium text-muted-foreground">
        Partner's returns cycle
      </h2>

      {/* Total Expected Return */}
      <div className="flex justify-between items-center bg-green-100 px-4 py-2 rounded-sm font-satoshi">
        <span className="text-green-700 font-semibold text-sm">
          Total Expected Return: 12%
        </span>

        <div className="flex gap-1 items-center">
          <span className="text-green-700 font-semibold text-base">£5170</span>
          <div className="bg-[#15221B]/20 gap-[1px] flex items-center text-white text-xs px-[3px] py-[1px] rounded-full font-medium">
            Paid
            <CheckCircle2 className="size-[14px] fill-white text-[#15221B]/20" />
          </div>
        </div>
      </div>

      {/* ROI Cycles */}
      <ul className="space-y-2 list-disc ml-5">
        <li>
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-[#6E6E6E]">
              Cycle 1: Jan. 5, 2025 - Feb. 9, 2025 (+4% to Portfolio)
            </span>
            <span className="font-medium text-nowrap">+£206.8</span>
          </div>
        </li>

        <li>
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-[#6E6E6E]">
              Cycle 2: Feb. 9, 2025 - Mar. 16, 2025 (+4% to Portfolio)
            </span>
            <span className="font-medium text-nowrap">+£206.8</span>
          </div>
        </li>

        <li>
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-[#6E6E6E]">
              Cycle 3: Mar. 16, 2025 - Apr. 20, 2025 (+4% + Capital to
              Portfolio)
            </span>
            <span className="font-medium text-nowrap">+£4756.4</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
