import { useQuery } from "@tanstack/react-query";
import { getVendorBeneficiaries } from "@/api/apiEndpoints";
import { Vendor } from "@/types/admin";
import { Building2, Phone, Mail } from "lucide-react";
import { getInitials } from "@/lib/getInitial";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoadingData from "@/components/Admin/LoadingData";
import PageTitle from "@/components/ui/PageTitle";

export default function SavedVendors() {
  const { data: vendors, isLoading, error } = useQuery({
    queryKey: ["vendor-beneficiaries"],
    queryFn: getVendorBeneficiaries,
  });


  if (isLoading) return <LoadingData />;

  if (error) {
    return (
      <div className="space-y-6">
        <PageTitle title="Saved Retail Shops" showBack={true} />
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-red-600">Failed to load saved retail shops</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageTitle title="Saved Retail Shops" showBack={true} />
      
    

      {vendors && vendors.length > 0 ? (
        <div className="space-y-3 divide-y">
          {vendors.map((vendor: Vendor) => (
            <div
              key={vendor.vendor_id}
              className="bg-white rounded-lg p-4 transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="size-10">
                    <AvatarImage src={vendor.profile_picture || ""} alt={vendor.vendor_name || ""} />
                    <AvatarFallback>{getInitials(vendor.vendor_name || "")}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-gray-900">{vendor.vendor_name || "Unknown Retail Shop"}</h3>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Phone className="h-3 w-3" />
                        <span>{vendor.vendor_phone}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Mail className="h-3 w-3" />
                        <span>{vendor.vendor_email}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
          <Building2 className="h-12 w-12 text-gray-300 mb-3" />
          <h3 className="text-sm font-medium text-gray-900 mb-1">No saved retail shops</h3>
          <p className="text-xs text-gray-500 text-center">
            You haven't saved any retail shops to your beneficiary list yet.
          </p>
        </div>
      )}
    </div>
  );
}
