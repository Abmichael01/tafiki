import PageTitle from "@/components/ui/PageTitle";
import { FiPlus } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import VendorsListComponent from "@/components/Admin/AdminProfile/VendorsList";
import { AiOutlineShop } from "react-icons/ai";
import { Edit3Icon, Trash } from "lucide-react";
import { useDataSelect } from "@/stores/useDataSelect";
import { cn } from "@/lib/utils";
import RemoveVendor from "@/components/Admin/Vendors/VendorDetails/RemoveVendor";
import { useQuery } from "@tanstack/react-query";
import { getVendorsist } from "@/api/adminEndpoints";
import { Vendor } from "@/types/admin";
import LoadingData from "@/components/Admin/LoadingData";

export default function VendorsList() {
  const [params] = useSearchParams();
  const editList = params.get("action");
  const { getSelectedCount } = useDataSelect();

  const { data, isLoading } = useQuery({
    queryKey: ["Vendors"],
    queryFn: getVendorsist,
  });

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-5">
      <PageTitle
        title="Vendors List"
        showBack={true}
        backLink="/admin/profile"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[4px]">
          <div className="bg-primary/5 p-[8px] rounded-full">
            <AiOutlineShop className="size-[14px] fill-primary stroke-primary/5" />
          </div>
          <p className="text-[16px] font-medium font-satoshi">
            Total Vendors: <span className="text-primary">10</span>
          </p>
        </div>
        {!editList ? (
          <div className="flex gap-4 items-center">
            <Link
              to="?action=edit-list"
              className="hover:bg-[#15221B0A] text-primary px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-2"
            >
              <Edit3Icon className="size-[16px]" />
              Edit Vendors List
            </Link>
            <Link
              to="?dialog=add-edit-vendor"
              className="bg-[#15221B0A] text-primary px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-2"
            >
              <FiPlus />
              New Vendor
            </Link>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link
              to={`?${params.toString()}&dialog=remove-vendor`}
              className={cn(
                "bg-[#B522171A] text-[#B52217]/40 px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-2",
                getSelectedCount() > 0
                  ? " text-[#B52217]"
                  : "cursor-not-allowed"
              )}
            >
              <Trash className="size-[16px]" />
              Remove Vendor(s)
            </Link>
          </div>
        )}
      </div>
      {editList ? (
        <VendorsListComponent data={data?.vendors as Vendor[]} select />
      ) : (
        <VendorsListComponent data={data?.vendors as Vendor[]} />
      )}
      <RemoveVendor />
    </div>
  );
}
