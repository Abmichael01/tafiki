import Overview from "@/components/Admin/Vendors/Overview";
import VendorsList from "@/components/Admin/Vendors/VendorsList";
import { PiPlusBold } from "react-icons/pi";
import AddEditVendor from "@/components/Admin/Vendors/AddEditVendor";
import { Link } from "react-router-dom";
import PageTitle from "@/components/ui/PageTitle";

export default function Vendors() {
  return (
    <div className="space-y-5 h-full w-full">
      <PageTitle title="Vendors" />
      <Overview />
      <div className="flex justify-end">
        <Link to="?dialog=add-edit-vendor" className="flex items-center gap-2 bg-[#F9F9F9] text-[#15221B] px-4 py-2 rounded-full">
            <PiPlusBold className="size-[20px]" />
            <span className="text-[15px] font-[500]">New Vendor</span>
        </Link>
      </div>
      <VendorsList />
      <AddEditVendor />
    </div>
  );
}
