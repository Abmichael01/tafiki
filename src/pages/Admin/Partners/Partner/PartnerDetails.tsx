import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import Overview from "../../../../components/Admin/Partners/PartnerDetails/Overview";
import { MailIcon } from "lucide-react";
import RecentOrders from "@/components/Admin/Overview/RecentOrders";
import Transactions from "../../../../components/Admin/Partners/PartnerDetails/Transactions";
import Info from "../../../../components/Admin/Partners/PartnerDetails/Info";
import ContactDetails from "@/components/Admin/ContactDetails";
import { AiOutlinePhone } from "react-icons/ai";

const contactData = [
    {
        label: "Phone",
        value: "+44-1234-5678-90",
        icon: AiOutlinePhone,
    },
    {
        label: "Email",
        value: "johndoe@gmail.com",
        icon: MailIcon,
    },
    {
        label: "Address",
        value: "16, Admiralty phase, Queensway, London",
    },
];


const PartnerDetails = () => {
    const { id } = useParams();
    return (
        <div className="space-y-10 px-2 sm:px-4 md:px-8 max-w-5xl mx-auto">
            {/* Header: Back and Title */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-center gap-[8px]">
                    <Link to="">
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
            <ContactDetails data={contactData} />   
            <RecentOrders status={true} link={`/admin/partners/${id}/orders`} />
            <Transactions showViewAll={true} />
        </div>
    );
};

export default PartnerDetails;