import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import Overview from "../../../../components/Admin/Partners/PartnerDetails/Overview";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import RecentOrders from "@/components/Admin/Overview/RecentOrders";
import Transactions from "../../../../components/Admin/Partners/PartnerDetails/Transactions";
import Info from "../../../../components/Admin/Partners/PartnerDetails/Info";

const contactData = [
    {
        label: "Phone",
        value: "+44-1234-5678-90",
        icon: PhoneIcon,
    },
    {
        label: "Email",
        value: "johndoe@gmail.com",
        icon: MailIcon,
    },
    {
        label: "Address",
        value: "16, Admiralty phase, Queensway, London",
        icon: MapPinIcon,
    },
];


const PartnerDetails = () => {
    const { id } = useParams();
    return (
        <div className="space-y-10 px-2 sm:px-4 md:px-8 max-w-5xl mx-auto">
            {/* Header: Back and Title */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-center gap-[8px]">
                    <Link to="/partner/portfolio">
                        <GoArrowLeft className="size-[24px]" />
                    </Link>
                    <h1 className="text-[20px] sm:text-[24px]">
                        Partners
                        <span className="font-[500] text-[14px] sm:text-[16px] text-[#929292]">
                            /John Doe
                        </span>
                    </h1>
                </div>
            </div>
            {/* Profile and Remittance Button */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <Info />
                <button
                    className="bg-[#1C274C1A] text-[#1C274C] rounded-[4px] flex items-center justify-center gap-[4px] opacity-100 px-[10px] py-[4px] text-[14px] sm:text-[16px] w-fit"
                >
                    Due for remittance
                </button>
            </div>
            {/* Overview Cards */}
            <Overview />
            {/* Contact Info */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] sm:gap-[20px] rounded-[4px] py-[4px]">
                    {contactData.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.label}
                                className="flex-1 bg-[#F9F9F9] rounded-[8px] p-[8px] flex flex-col gap-[8px] min-w-0"
                            >
                                <span className="text-[12px] text-[#929292] font-satoshi font-[400] leading-none">
                                    {item.label}
                                </span>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-satoshi font-bold text-[15px] sm:text-[16px] leading-none text-[#1C274C] break-all">
                                        {item.value}
                                    </span>
                                    {/* Only show icon for phone and email */}
                                    {(item.label === "Phone" || item.label === "Email") && (
                                        <Icon className="text-[#929292] w-4 h-4" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <RecentOrders status={true} link={`/admin/partners/${id}/orders`} />
            <Transactions heading="Transactions" showViewAll={true} />
        </div>
    );
};

export default PartnerDetails;