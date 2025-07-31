import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { useCloseDialog } from "@/hooks/closeDialog";
import { FiLogOut } from "react-icons/fi";

export default function Logout() {
    const closeDialog = useCloseDialog("logout");
    return (
        <GlobalDialog dialogName="logout">
            <DialogContent className="max-w-[400px] rounded-2xl p-8">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#B52217]/10 mb-2">
                            <FiLogOut className="text-[#B52217] w-7 h-7" />
                        </div>
                        <h2 className="text-xl font-semibold text-[#111827]">Log out of account</h2>
                        <p className="text-center text-[#374151] text-base font-normal">
                            Are you sure you want to exit your account?
                        </p>
                    </div>
                    <div className="flex w-full gap-4 mt-4">
                        <button
                            className="flex-1 bg-[#15221B] text-white font-medium py-3 rounded-md transition-colors hover:bg-primary/90 text-base"
                        >
                            Yes, log out
                        </button>
                        <button
                            className="flex-1 bg-[#F9F9F9] text-[#111827] font-medium py-3 rounded-md border border-[#F3F4F6] transition-colors hover:bg-[#f3f4f6] text-base"
                            onClick={closeDialog}
                        >
                            No, cancel
                        </button>
                    </div>
                </div>
            </DialogContent>
        </GlobalDialog>
    );
}