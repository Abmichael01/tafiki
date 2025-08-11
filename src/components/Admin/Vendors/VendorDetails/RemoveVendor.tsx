import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { useCloseDialog } from "@/hooks/closeDialog";
import { Toast } from "../../Toast";
import { toast } from "sonner";
import { Vendor } from "@/types/admin";
import { deleteVendor } from "@/api/adminEndpoints";
import { useMutation } from "@tanstack/react-query";
import errorMessage from "@/lib/errorMessage";
import { useNavigate } from "react-router-dom";

export default function RemoveVendor({ data }: { data?: Vendor }) {
  const closeDialog = useCloseDialog("remove-vendor");
  const navigate = useNavigate()


  // Simulate vendor name, in real use, pass as prop or context
  const vendorName = data?.name;

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteVendor(id),
    onSuccess: () => {
      toast.custom(() => (
        <Toast text="Vendor Removed" icon={<HiMiniBuildingStorefront />} />
      ));
      navigate("/admin/vendors")
    },
    onError: (error: Error) => {
      toast.custom(() => (
        <Toast
          text={errorMessage(error)}
          decline
          icon={<HiMiniBuildingStorefront />}
        />
      ));
    },
  });

  const handleRemove = () => {
    mutate(data?.vendor_id as string)
  };

  return (
    <GlobalDialog dialogName="remove-vendor">
      <DialogContent className="max-w-[370px] py-8 flex flex-col items-center gap-6">
        {/* Icon */}
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center p-[10px] rounded-full bg-[#15221B33]">
            <HiMiniBuildingStorefront className="size-[32px] text-[#15221B]" />
          </span>
          {/* Title */}
          <h2 className="text-[20px] font-bold text-[#15221B] text-center">
            Remove Vendor
          </h2>
        </div>
        {/* Description */}
        <p className="text-center text-[15px] text-[#15221B] font-medium">
          Do you want to remove <span className="font-bold">{vendorName}</span>{" "}
          as a Vendor?
        </p>
        {/* Actions */}
        <div className="flex w-full gap-3 mt-2">
          <Button
            className="flex-1 bg-[#C62828] hover:bg-[#b71c1c] text-white font-semibold rounded-md py-3"
            onClick={handleRemove}
            disabled={isPending}
          >
            {isPending ? "Removing..." : "Yes, remove"}
          </Button>
          <Button
            className="flex-1 bg-[#F3F4F6] hover:bg-[#e5e7eb] text-[#15221B] font-medium rounded-md py-3 shadow-none border-none"
            variant="outline"
            onClick={closeDialog}
          >
            No, cancel
          </Button>
        </div>
      </DialogContent>
    </GlobalDialog>
  );
}
