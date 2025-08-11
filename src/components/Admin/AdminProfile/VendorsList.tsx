import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useDataSelect } from "@/stores/useDataSelect";
import { Vendor } from "@/types/admin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";

// Mock vendors data

interface VendorsListProps {
  data: Vendor[];
  select?: boolean;
}

const VendorsList: React.FC<VendorsListProps> = ({ select = false, data }) => {
  const {
    selectAll,
    unselectAll,
    setSelected,
    isSelected,
    isAllSelected,
    clearSelection,
  } = useDataSelect();

  const vendorIds = data.map((vendor) => vendor.id);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      selectAll(vendorIds);
    } else {
      unselectAll();
    }
  };

  const handleSelectVendor = (vendorId: number, checked: boolean) => {
    setSelected(vendorId, checked);
  };

  const handleCancel = () => {
    clearSelection();
  };

  return (
    <div className=" rounded-lg overflow-hidden font-satoshi">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto text-nowrap">
          <thead>
            <tr className="bg-[#F9F9F9] border-b border-gray-200 text-center">
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Owner
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {select && (
              <tr className="">
                <td colSpan={4} className="p-0">
                  <div className="flex items-center justify-between w-full p-4">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={isAllSelected(vendorIds)}
                        onCheckedChange={handleSelectAll}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Select all
                      </span>
                    </div>

                    <button
                      onClick={handleCancel}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            )}
            {data.map((vendor) => (
              <tr
                key={vendor.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {select && (
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={isSelected(vendor.id)}
                          onCheckedChange={(checked) =>
                            handleSelectVendor(vendor.id, checked as boolean)
                          }
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                      </div>
                    )}
                    <Avatar className="size-10 text-primary">
                      <AvatarImage
                        src="https://github.com/shadcn.pn"
                        alt="@shadcn"
                      />
                      <AvatarFallback className=" bg-primary/40">{getInitials(vendor.name)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold ">
                      {vendor.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm  text-center font-semibold">
                  {vendor.name}
                </td>
                <td className="px-4 py-3 text-sm text-center font-semibold">
                  {vendor.email}
                </td>
                <td className="px-4 py-3 text-sm text-center font-semibold">
                  {vendor.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorsList;
