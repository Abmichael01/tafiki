import { IoMdBriefcase } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

// Updated statsData array to match the data and order in the provided image
const statsData = [
    {
        id: "total-orders",
        label: "Total Order(s)",
        icon: HiUsers, // Using HiUsers for orders (can be replaced with a more suitable icon if desired)
        value: "12",
    },
    {
        id: "total-purchases",
        label: "Total Purchase(s)",
        icon: IoMdBriefcase, // Using briefcase for purchases
        value: "£12,300",
    },
    {
        id: "portfolio-balance",
        label: "Portfolio Balance",
        icon: BiMoneyWithdraw, // Using money withdraw for portfolio balance
        value: "£12,300",
    },
    {
        id: "wallet-balance",
        label: "Wallet Balance",
        icon: FaWallet, // Using wallet icon for wallet balance
        value: "£12,300",
    },
];

export default function Overview() {
    return (
        <div className="space-y-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center font-satoshi ">
                {statsData.map((data) => (
                    <Link
                        to={data.id}
                        key={data.id}
                        className="border-l first:border-0 flex-1  pl-[20px] py-[5px] "
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
        </div >
    );
}
