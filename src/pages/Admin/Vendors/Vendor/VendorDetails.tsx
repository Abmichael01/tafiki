import { Link, useParams } from "react-router-dom";
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
import PageTitle from "@/components/ui/PageTitle";
import useVendorsStore from "@/stores/vendorsStore";
import { useQuery } from "@tanstack/react-query";
import { getVendor } from "@/api/adminEndpoints";
import { Vendor } from "@/types/admin";

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
  const { id } = useParams();

  console.log(id)
  
  const { vendors } = useVendorsStore();
  console.log(vendors)
//   const vendor = vendors?.find((vendor) => vendor.id == Number(id));

  const { data } = useQuery({
    queryKey: ["vendor", id],
    queryFn: () => getVendor(Number(id))
  })

  const vendorContactData = [
    {
      label: "Address",
      value: "16, Admiralty phase, Queensway, London",
    },
    {
      label: "Email",
      value: data?.email as string,
      icon: MailIcon,
      copy: true,
    },
    {
      label: "Phone",
      value: data?.phone as string,
      icon: AiOutlinePhone,
    },
  ];

  return (
    <div className="space-y-10">
      <PageTitle title="Partners" subtitle="John Doe" showBack={true} />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Info data={data as Vendor } />
        <div className="flex gap-[12px] text-[14px]">
          <Link
            to="?dialog=add-edit-vendor"
            className="flex gap-[8px] items-center cursor-pointer px-[12px] py-[4px] rounded-[4px] hover:bg-primary/5 transition-all duration-300 text-primary"
          >
            <Edit3 className="size-[16px]" />
            Edit Info
          </Link>
          <Link
            to="?dialog=remove-vendor"
            className="flex gap-[8px] items-center cursor-pointer px-[12px] py-[4px] rounded-[4px] hover:bg-primary/5 transition-all duration-300 text-primary"
          >
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
