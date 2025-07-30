import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Info from "@/components/Admin/Vendors/VendorDetails/Info";
import Overview from "@/components/Admin/Vendors/VendorDetails/Overview";
import Transactions from "@/components/Admin/Vendors/VendorDetails/Transactions";
import ContactDetails from "@/components/Admin/ContactDetails";
import RecentOrders from "@/components/Admin/Overview/RecentOrders";
import { AiOutlinePhone } from "react-icons/ai";

import { Edit3, MailIcon, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AddEditVendor from "@/components/Admin/Vendors/AddEditVendor";
import RemoveVendor from "@/components/Admin/Vendors/VendorDetails/RemoveVendor";

const vendorContactData = [
    {
        label: "Address",
        value: "16, Admiralty phase, Queensway, London",
    },
    {
        label: "Email",
        value: "kapacventures@email.com",
        icon: MailIcon,
        copy: true,
    },
    {
        label: "Phone",
        value: "+44-1234-5678-90",
        icon: AiOutlinePhone,
    },
];

const ownerContactData = [
    {
        label: "Name",
        value: "David Kapac",
    },
    {
        label: "Email",
        value: "davidkapac@gmail.com",
        icon: MailIcon,
        copy: true,
    },
    {
        label: "Phone",
        value: "+44-0011-2233-44",
        icon: AiOutlinePhone,
    },
];


export default function VendorDetails() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-center gap-[8px]">
                    <Link to="/admin/vendors">
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
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <Info />
                <div className="flex gap-[12px] text-[14px]">
                    <Link to="?dialog=add-edit-vendor" className="flex gap-[8px] items-center cursor-pointer px-[12px] py-[4px] rounded-[4px] hover:bg-primary/5 transition-all duration-300 text-primary">
                        <Edit3 className="size-[16px]" />
                        Edit Info
                    </Link>
                    <Link to="?dialog=remove-vendor" className="flex gap-[8px] items-center cursor-pointer px-[12px] py-[4px] rounded-[4px] hover:bg-primary/5 transition-all duration-300 text-primary">
                        <Trash className="size-[16px]" />
                        Remove Vendor
                    </Link>
                </div>  
            </div>
            {/* Overview Cards */}
            <Overview />

            <Separator className="-mt-[20px]" />

            {/* Contact Info */}
            <div className="space-y-[20px] -mt-[20px]">
                <ContactDetails data={vendorContactData} />
                <div className="space-y-[8px]">
                    <h2 className="text-[16px] font-[700] text-[#636C67]">Owner</h2>
                    <ContactDetails data={ownerContactData} />
                </div>
            </div>
            <RecentOrders status={true} link={`/admin/vendors/1/orders`} />
            <Transactions showViewAll={true} />
            <AddEditVendor data={true} />
            <RemoveVendor />
        </div>
    );
}
