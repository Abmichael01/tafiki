import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { CheckCircle2, Clock } from "lucide-react";

// Props type for the component
type VendorDeliveryDetailsProps = {
  orderStatus: string;
};

export default function VendorDeliveryDetails({
  orderStatus,
}: VendorDeliveryDetailsProps) {

  // Determine delivery status based on order status
  const isDelivered = orderStatus.toLowerCase() === "delivered";

  return (
    <GlobalDialog dialogName="vendor-delivery-details">
      <DialogContent className="max-w-[500px] py-6">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
            <HiOutlineClipboardDocumentList className="size-6 text-gray-600" />
          </div>
          <div>
            <h2 className="text-[20px] font-bold text-gray-800">
              Delivery Status
            </h2>
          </div>
        </div>

        {/* Delivery Status Content */}
        <div className="text-center py-8">
          {isDelivered ? (
            <div className="space-y-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="size-12 text-gray-700" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-800">Delivered</h3>
                <p className="text-gray-500">
                  Form completed (Delivery Complete)
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                <Clock className="size-12 text-gray-700" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-800">Pending</h3>
                <p className="text-gray-500">
                  Form not yet filled (Delivery Incomplete)
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </GlobalDialog>
  );
}
