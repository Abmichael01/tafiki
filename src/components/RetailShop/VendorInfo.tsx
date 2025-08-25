import { useVendor } from "@/hooks/useVendor";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export default function VendorInfo() {
  const { vendor, isVendorLoaded } = useVendor();

  if (!isVendorLoaded) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="p-4 bg-red-50 rounded-lg">
        <p className="text-red-600 text-sm">Vendor information not available</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg space-y-3">
      <div className="flex items-center gap-2">
        <Building2 className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">{vendor.store_name}</h3>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>{vendor.store_email}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>{vendor.store_phone}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 mt-0.5" />
          <span>{vendor.store_address}</span>
        </div>
      </div>
      
      <div className="pt-2 border-t border-gray-100">
        <span className="text-xs text-gray-500">Vendor ID: {vendor.vendor_id}</span>
      </div>
    </div>
  );
}
