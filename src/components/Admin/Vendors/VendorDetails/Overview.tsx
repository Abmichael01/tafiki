import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { PiPackageFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { VendorDetails } from "@/types/admin";

// Updated statsData array to match the data and order in the provided image

export default function Overview({ total_remittance, today_remittance, recent_orders }: Partial<VendorDetails>) {
    const statsData = [
        {
            id: "total-orders",
            label: "Total Order(s) Received",
            icon: PiPackageFill,
            value: recent_orders?.length,
        },
        {
            id: "todays-remittance",
            label: "Today's Remittance",
            icon: FaCirclePlus,
            value: total_remittance,
        },
        {
            id: "total-remittance",
            label: "Total Remittance",
            icon: BsArrowUpRightCircleFill,
            value: today_remittance,
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
        </div >
    );
}
