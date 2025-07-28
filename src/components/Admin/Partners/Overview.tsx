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
            flex-1 pl-[20px] py-[5px]
            border shadow-sm sm:shadow-none
            sm:border-0 sm:pl-[20px] sm:py-[5px]
            sm:${["", "border-l", "", "border-l"][statsData.findIndex(d => d.id === data.id)]}
            lg:border-0 md:pl-[20px] md:py-[5px]
            lg:${["", "border-l", "", "border-l"][statsData.findIndex(d => d.id === data.id)]}
            lg:border-0 lg:pl-[20px] lg:py-[5px]
            rounded-[8px] sm:rounded-none
            ${statsData.findIndex(d => d.id === data.id) !== 0 ? "lg:border-l" : ""}
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
