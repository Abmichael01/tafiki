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
import { useQuery } from "@tanstack/react-query";
import { getVendor } from "@/api/adminEndpoints";
import { Order, Vendor, VendorDetails as VendorDetailsType } from "@/types/admin";
import LoadingData from "@/components/Admin/LoadingData";

;

export default function VendorDetails() {
  const { id } = useParams();

  console.log(id);

  const { data, isLoading } = useQuery<VendorDetailsType>({
    queryKey: ["vendor", id],
    queryFn: () => getVendor(id as string),
  });

  console.log(data);
  const vendorContactData = [
    {
      label: "Address",
      value: data?.vendor_details?.store_address as string,
    },
    {
      label: "Email",
      value: data?.vendor_details?.store_email as string,
      icon: MailIcon,
      copy: true,
    },
    {
      label: "Phone",
      value: data?.vendor_details?.store_phone as string,
      icon: AiOutlinePhone,
    },
  ];

  const ownerContactData = [
    {
      label: "Name",
      value: data?.vendor_details?.name as string,
    },
    {
      label: "Email",
      value: data?.vendor_details?.email as string,
      icon: MailIcon,
      copy: true,
    },
    {
      label: "Phone",
      value: data?.vendor_details?.store_phone as string,
      icon: AiOutlinePhone,
    },
  ]

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-10">
      <PageTitle
        title="Vendors"
        subtitle={data?.vendor_details?.store_name}
        showBack={true}
      />
      <div className="flex flex-col md:flex-row sm:justify-between md:items-center gap-4">
        <Info data={data?.vendor_details as Vendor} />
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
      <Overview
        total_remittance={data?.total_remittance}
        today_remittance={data?.today_remittance}
        recent_orders={data?.vendor_details?.recent_orders?.length as number}
      />

      <Separator className="-mt-[20px]" />

      {/* Contact Info */}
      <div className="space-y-[20px] -mt-[20px]">
        <ContactDetails data={vendorContactData} />
        <div className="space-y-[8px]">
          <h2 className="text-[16px] font-[700] text-[#636C67]">Owner</h2>
          <ContactDetails data={ownerContactData} />
        </div>
      </div>
      <RecentOrders
        status={true}
        data={data?.vendor_details?.recent_orders as Order[]}
        link={`/admin/vendors/1/orders`}
      />
      <Transactions showViewAll={true} />
      <AddEditVendor data={data?.vendor_details as Vendor} />
      <RemoveVendor data={data?.vendor_details as Vendor} />
    </div>
  );
}
