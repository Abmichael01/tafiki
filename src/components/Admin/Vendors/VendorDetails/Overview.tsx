import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { PiPackageFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";

// Updated statsData array to match the data and order in the provided image
const statsData = [
    {
        id: "total-orders",
        label: "Total Order(s) Received",
        icon: PiPackageFill,
        value: "12",
    },
    {
        id: "todays-remittance",
        label: "Today's Remittance",
        icon: FaCirclePlus,
        value: "£15,300.21",
    },
    {
        id: "total-remittance",
        label: "Total Remittance",
        icon: BsArrowUpRightCircleFill,
        value: "£110,900.72",
    },
];

export default function Overview() {
    return (
        <div className="space-y-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] lg:grid-cols-4 justify-between items-center font-satoshi ">
                {statsData.map((data) => (
                    <Link
                        to={data.id}
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
                    </Link>
                ))}
            </div>
        </div >
    );
}
