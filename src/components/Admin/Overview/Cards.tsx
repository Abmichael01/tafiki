import React from "react";
import OverviewCard from "../../Others/OverviewCard";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Clock } from "lucide-react";
import { Overview } from "@/types/admin";

// interface Props {
// }

const Cards: React.FC<Partial<Overview>> = ({ todays_remittance, total_balance, pending_withdrawals }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] gap-y-[50px]">
      <OverviewCard className=" h-[160px] lg:h-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-[12px]">
            <Clock className="w-[14px] fill-primary stroke-white" />
            <h1>Pending Withrawals</h1>
          </div>
          <Link to="/admin/partners/withdrawal-requests">
            <FaChevronRight className="" />
          </Link>
        </div>
        <div className="text-center font-satoshi">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
            {pending_withdrawals}
          </h1>
          <h1 className="text-[12px]">
            Withdrawals
          </h1>
        </div>
        {/* <Link to="?dialog=withdrawFromPortfolio" className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
          <FiUpload className="size-[15px]" />
          <h1 className="text-[12px]">Withdraw</h1>
        </Link> */}
      </OverviewCard>

      <OverviewCard className="h-[160px] lg:h-full ">
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-1">
            <FaPlus className="w-[14px]" />
            <h1>Today's Remittance</h1>
          </div>
          <Link to="#">
            <FaChevronRight className="" />
          </Link>
        </div>
        <div className="text-center font-satoshi h-full mt-[10px]">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
            {" "}
            <span className=" text-[18px] text-white/60">£</span>
            {todays_remittance?.toLocaleString("en-GB")}
          </h1>
        </div>
      </OverviewCard>

      <OverviewCard isAdmin={false} className="h-[160px] lg:h-full">
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-1">
            <IoMdWallet className="w-[14px]" />
            <h1>Total Balance</h1>
          </div>
          <Link to="#">
            <FaChevronRight />
          </Link>
        </div>
        <div className="text-center font-satoshi h-full mt-[10px]">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
            {" "}
            <span className=" text-[18px] text-white/60">£</span>
            {total_balance?.toLocaleString("en-GB")}
          </h1>
        </div>
      </OverviewCard>
    </div>
  );
};

export default Cards;
