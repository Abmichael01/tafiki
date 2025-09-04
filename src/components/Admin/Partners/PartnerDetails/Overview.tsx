import { IoMdBriefcase } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { Package } from "lucide-react";


export default function Overview({
  data,
}: {
  data?: {
    total_invested: number;
    total_orders: number;
    balance: number;
  };
}) {
  const statsData = [
    {
      id: "total-orders",
      label: "Total Order(s)",
      icon: Package, // Using HiUsers for orders (can be replaced with a more suitable icon if desired)
      value: data?.total_orders,
    },
    {
      id: "total-purchases",
      label: "Total Purchase(s)",
      icon: IoMdBriefcase, // Using briefcase for purchases
      value: "$"+data?.total_invested?.toLocaleString('en-GB'),
    },
    {
      id: "portfolio-balance",
      label: "Portfolio Balance",
      icon: BiMoneyWithdraw, // Using money withdraw for portfolio balance
      value: `$${(0).toLocaleString('en-GB')}`,
    },
    {
      id: "wallet-balance",
      label: "Wallet Balance",
      icon: FaWallet, // Using wallet icon for wallet balance
      value: "$"+data?.balance?.toLocaleString('en-GB'),
    },
  ];
  return (
    <div className="space-y-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] lg:grid-cols-4 justify-between items-center font-satoshi ">
        {statsData.map((data) => (
          <div
            key={data.id}
            className={`
                            flex-1 py-[15px] shadow-sm rounded-[8px] px-[20px]
                            sm:px-0 sm:shadow-none sm:border-l sm:first:border-0 sm:nth-[3]:border-0 sm:pl-[20px] sm:py-[15px] sm:rounded-none
                            lg:border-0 lg:border-l lg:first:border-0 lg:nth-[3]:border-l
                          `}
          >
            <div className="space-y-[12px]">
              <div className="flex gap-1 items-center">
                <span className="p-[5px] bg-[#15221B33] rounded-full">
                  <data.icon className="size-[15px]" />
                </span>
                <span className="">{data.label}</span>
              </div>
              <h2 className="text-[20px] text-primary font-[700]">
                {data.value}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
