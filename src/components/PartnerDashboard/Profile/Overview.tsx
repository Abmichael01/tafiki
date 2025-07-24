import React from 'react'
import { FaBagShopping, FaChevronRight } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { IoMdWallet } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import OverviewCard from "@/components/Others/OverviewCard";
import { Link } from "react-router-dom";
import useUserDetailsStore from '@/stores/userStore';

const Overview: React.FC = () => {
  const { userDetails } = useUserDetailsStore()
  return (
    <div className=" flex flex-col sm:flex-row justify-center gap-y-[50px] gap-x-[50px] lg:gap-x-[120px]">
        <OverviewCard className="w-full sm:w-[313px] bg-[#004a00] ">
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
              <span className=" text-[18px] text-[#FFFFFF99]">£</span> {userDetails?.wallet_balance}
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <Link to="?dialog=withdrawFromWallet" className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
              <FiUpload className="size-[15px]" />
              <h1 className="text-[12px]">Withdraw</h1>
            </Link>
            <Link to="?dialog=fundWallet" className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
              <FaPlus className="size-[15px]" />
              <h1 className="text-[12px]">Fund</h1>
            </Link>
          </div>
        </OverviewCard>
        <OverviewCard className="w-full sm:w-[313px] bg-[#002400] h-[160px]">
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
              <span className=" text-[18px] text-[#FFFFFF99]">£</span> {userDetails?.total_roi_paid}
            </h1>
            <h1 className="text-[12px]">
              {" "}
              <span className="text-[#16A34A]">(+{((userDetails?.daily_roi || 0) / (userDetails?.total_roi_paid || 1) * 100).toFixed(2)}%)</span>(+£{userDetails?.daily_roi}) Today
            </h1>
          </div>
          {/* <Link to="?dialog=withdrawFromPortfolio" className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
            <FiUpload className="size-[15px]" />
            <h1 className="text-[12px]">Withdraw</h1>
          </Link> */}
        </OverviewCard>
      </div>
  )
}

export default Overview