import React from "react";
import OverviewCard from "../../Others/OverviewCard";
import { Link } from "react-router-dom";
import { FaBagShopping, FaChevronRight } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { FaTag } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import useUserDetailsStore from "@/stores/userStore";

const Overview: React.FC = () => {
  const { userDetails } = useUserDetailsStore()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] gap-y-[50px]">
      <OverviewCard className="bg-[#002400] h-[160px] lg:h-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-[12px]">
            <FaBagShopping className="w-[8px]" />
            <h1>Account Inflow</h1>
          </div>
          <Link to="/partner/portfolio/portfolio">
            <FaChevronRight />
          </Link>
        </div>
        <div className="text-center font-satoshi">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
            {" "}
            <span className=" text-[18px] text-[#FFFFFF99]">$</span> {userDetails?.total_roi_paid?.toLocaleString("en-GB")}
          </h1>
          <h1 className="text-[12px]">
            {" "}
            <span className="text-[#16A34A]">(+{((userDetails?.daily_roi || 0) / (userDetails?.total_roi || 1) * 100).toFixed(2)}%)</span>(+${userDetails?.daily_roi?.toLocaleString('en-GB')}) Today
          </h1>
        </div>
        {/* <Link to="?dialog=withdrawFromPortfolio" className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
          <FiUpload className="size-[15px]" />
          <h1 className="text-[12px]">Withdraw</h1>
        </Link> */}
      </OverviewCard>

      <OverviewCard className="h-[160px] lg:h-full bg-[#003700]">
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-1">
            <FaTag className="w-[8px]" />
            <h1>Total purchase</h1>
          </div>
          <Link to="#">
            <FaChevronRight className="" />
          </Link>
        </div>
        <div className="text-center font-satoshi h-full">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center mt-[20px]">
            {" "}
            <span className=" text-[18px] text-white/60">$</span> {userDetails?.total_invested?.toLocaleString("en-GB")}
          </h1>
        </div>
      </OverviewCard>

      <OverviewCard className="bg-[#004a00]">
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-1">
            <IoMdWallet className="w-[8px]" />
            <h1>Wallet</h1>
          </div>
          <Link to="/partner/portfolio/wallet">
            <FaChevronRight />
          </Link>
        </div>
        <div className="text-center font-satoshi h-full">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
            {" "}
            <span className=" text-[18px] text-white/60">$</span> {userDetails?.wallet_balance?.toLocaleString("en-GB")}
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <Link to="?dialog=withdrawFromWallet"
            className="text-center flex flex-col gap-[2px] items-center cursor-pointer"
          >
            <FiUpload className="size-[15px]" />
            <h1 className="text-[12px]">Withdraw</h1>
          </Link>
          <Link to="?dialog=fundWallet" className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
            <FaPlus className="size-[15px]" />
            <h1 className="text-[12px]">Fund</h1>
          </Link>
        </div>
      </OverviewCard>
    </div>
  );
};

export default Overview;
