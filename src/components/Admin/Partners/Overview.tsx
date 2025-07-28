import { IoMdBriefcase } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const statsData = [
  {
    id: "total-investment",
    label: "Total Investment",
    icon: IoMdBriefcase, // Briefcase emoji representing investment
    value: "£124,300",
  },
  {
    id: "total-partners",
    label: "Total Partners",
    icon: HiUsers, // People emoji representing partners
    value: "12",
  },
  {
    id: "withdrawal-requests",
    label: "Withdrawal Requests",
    icon: BiMoneyWithdraw, // Warning sign emoji representing requests
    value: "5",
  },
  {
    id: "due-for-remittance",
    label: "Due for Remittance",
    icon: FaClock, // Alarm clock emoji representing due dates
    value: "3",
  },
];

export default function Overview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] lg:grid-cols-4 justify-between items-center font-satoshi ">
      {statsData.map((data) => (
        <Link
            to={data.id}
          key={data.id}
          className={`
            flex-1 py-[15px] shadow-sm rounded-[8px] px-[20px]
            sm:px-0 sm:shadow-none sm:border-l sm:first:border-0 sm:nth-[3]:border-0 sm:pl-[20px] sm:py-[15px] sm:rounded-none
            lg:border-0 lg:border-l lg:first:border-0
          `}
        >
          <div className="space-y-[12px]">
            <div className="flex gap-1 items-center">
              <span className="p-[2px] bg-[#15221B33] rounded-full">
                <data.icon className="text-[#15221B]" />
              </span>
              <span className="">{data.label}</span>
            </div>
            <h2 className="text-[20px] text-primary font-[700]">
              {data.value}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
