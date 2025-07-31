import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HiOutlineTrash } from "react-icons/hi";
import { useCloseDialog } from "@/hooks/closeDialog";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Toast } from "../Toast";

export default function DeleteProduct() {
    const closeDialog = useCloseDialog("delete-product");
    const navigate = useNavigate();

    // Simulate product name, in real use, pass as prop or context
    const productName = "Sample Product";

    const handleDelete = () => {
        navigate("/admin/profile/manage-products");
        toast.custom(() => (
            <Toast text="Product Deleted" icon={<HiOutlineTrash />} />
        ));
    };

    return (
        <GlobalDialog dialogName="delete-product">
            <DialogContent className="max-w-[370px] py-8 flex flex-col items-center gap-6">
                {/* Icon */}
                <div className="flex flex-col items-center gap-2">
                    <span className="flex items-center justify-center p-[10px] rounded-full bg-[#C62828]/10">
                        <HiOutlineTrash className="size-[32px] text-[#C62828]" />
                    </span>
                    {/* Title */}
                    <h2 className="text-[20px] font-bold text-[#15221B] text-center">
                        Delete Product
                    </h2>
                </div>
                {/* Description */}
                <p className="text-center text-[15px] text-[#15221B] font-medium">
                    Do you want to delete <span className="font-bold">{productName}</span> from your products?
                </p>
                {/* Actions */}
                <div className="flex w-full gap-3 mt-2">
                    <Button
                        className="flex-1 bg-[#C62828] hover:bg-[#b71c1c] text-white font-semibold rounded-md py-3"
                        onClick={handleDelete}
                    >
                        Yes, delete
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