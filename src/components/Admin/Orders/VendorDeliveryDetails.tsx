import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCloseDialog } from "@/hooks/closeDialog";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data type - replace with your actual order type
type VendorDeliveryDetails = {
  vendor_name: string;
  owner_name: string;
  owner_email: string;
  store_name: string;
  store_email: string;
  store_phone: string;
  store_address: string;
  form_status: "pending" | "completed";
};

// Mock data - this would come from props or context in real implementation
const mockVendorData: VendorDeliveryDetails = {
  vendor_name: "Kapac Ventures",
  owner_name: "John Doe",
  owner_email: "johndoe@email.com",
  store_name: "Kapac Ventures",
  store_email: "kapacventures@email.com",
  store_phone: "+44-1234-5678-90",
  store_address: "16, Admiralty phase, Queensway, London",
  form_status: "completed"
};

const deliveryFields = [
  {
    label: "Owner's Name",
    value: mockVendorData.owner_name,
  },
  {
    label: "Owner's email address",
    value: mockVendorData.owner_email,
  },
  {
    label: "Store Name",
    value: mockVendorData.store_name,
  },
  {
    label: "Store Email Address",
    value: mockVendorData.store_email,
  },
  {
    label: "Store Phone",
    value: mockVendorData.store_phone,
  },
  {
    label: "Store Address",
    value: mockVendorData.store_address,
  },
];

export default function VendorDeliveryDetails() {
  const closeDialog = useCloseDialog("vendor-delivery-details");

  return (
    <GlobalDialog dialogName="vendor-delivery-details">
      <DialogContent className="max-w-[500px] py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-2 rounded-full bg-primary/10">
              <HiOutlineClipboardDocumentList className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#15221B]">
                Delivery Form
              </h2>
              <p className="text-[14px] text-[#6E6E6E]">Vendor's details</p>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className={cn(
            "flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-medium",
            mockVendorData.form_status === "completed" 
              ? "bg-green-100 text-green-700" 
              : "bg-gray-100 text-gray-600"
          )}>
            {mockVendorData.form_status === "completed" ? (
              <>
                <CheckCircle className="size-3" />
                <span>Form Filled</span>
                <span className="text-green-600">●</span>
                <span>Delivery complete</span>
              </>
            ) : (
              <>
                <Clock className="size-3" />
                <span>Pending</span>
              </>
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          {deliveryFields.map((field, index) => (
            <div key={index} className="space-y-1">
              <label className="text-[12px] text-[#6E6E6E] font-medium">
                {field.label}
              </label>
              <div className="w-full p-3 bg-[#F9F9F9] border border-gray-200 rounded-md text-[14px] text-[#15221B]">
                {field.value}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-end">
          <Button
            onClick={closeDialog}
            className="bg-[#15221B] hover:bg-[#15221B]/90 text-white px-6 py-2 rounded-md"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </GlobalDialog>
  );
}
