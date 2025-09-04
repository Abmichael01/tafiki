import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { useCloseDialog } from "@/hooks/closeDialog";
import { Toast } from "../../Toast";
import { toast } from "sonner";
import { Partner } from "@/types/admin";
import { deletePartner } from "@/api/adminEndpoints";
import { useMutation } from "@tanstack/react-query";
import errorMessage from "@/lib/errorMessage";
import { useNavigate } from "react-router-dom";

export default function RemovePartner({ data }: { data?: Partner }) {
  const closeDialog = useCloseDialog("remove-partner");
  const navigate = useNavigate()

  const partnerName = data?.name;

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deletePartner(id),
    onSuccess: () => {
      toast.custom(() => (
        <Toast text="Partner Removed" icon={<HiMiniBuildingStorefront />} />
      ));
      navigate("/admin/partners")
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
    mutate(data?.id?.toString() as string)
  };

  return (
    <GlobalDialog dialogName="remove-partner">
      <DialogContent className="max-w-[370px] py-8 flex flex-col items-center gap-6">
        {/* Icon */}
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center justify-center p-[10px] rounded-full bg-[#15221B33]">
            <HiMiniBuildingStorefront className="size-[32px] text-[#15221B]" />
          </span>
          {/* Title */}
          <h2 className="text-[20px] font-bold text-[#15221B] text-center">
            Remove Partner
          </h2>
        </div>
        {/* Description */}
        <p className="text-center text-[15px] text-[#15221B] font-medium">
          Do you want to remove <span className="font-bold">{partnerName}</span>{" "}
          as a Partner?
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
