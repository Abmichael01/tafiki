import Overview from "@/components/Admin/Vendors/Overview";
import VendorsList from "@/components/Admin/Vendors/VendorsList";
import { PiPlusBold } from "react-icons/pi";
import AddEditVendor from "@/components/Admin/Vendors/AddEditVendor";
import { Link } from "react-router-dom";
import PageTitle from "@/components/ui/PageTitle";
import { useQuery } from "@tanstack/react-query";
import { getVendorsist } from "@/api/adminEndpoints";
import { Vendor, Vendors as VendorsType } from "@/types/admin";
import useVendorsStore from "@/stores/vendorsStore";
import { useEffect } from "react";

export default function Vendors() {
  const { setVendors } = useVendorsStore()
  const { data } = useQuery({
    queryKey: ["Vendors"],
    queryFn: getVendorsist,
  });
  useEffect(() => {
    setVendors(data?.results as Vendor[])
  }, [setVendors, data])
  return (
    <div className="space-y-5 h-full w-full">
      <PageTitle title="Vendors" />
      {data && <Overview {...(data as VendorsType)} />}
      <div className="flex justify-end">
        <Link
          to="?dialog=add-edit-vendor"
          className="flex items-center gap-2 bg-[#F9F9F9] text-[#15221B] px-4 py-2 rounded-full"
        >
          <PiPlusBold className="size-[20px]" />
          <span className="text-[15px] font-[500]">New Vendor</span>
        </Link>
      </div>
      <VendorsList data={data?.results as Vendor[]} />
      <AddEditVendor />
    </div>
  );
}
