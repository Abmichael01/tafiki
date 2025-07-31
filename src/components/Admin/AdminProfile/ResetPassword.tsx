import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { useCloseDialog } from "@/hooks/closeDialog";
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import pinIcon from "@/assets/svgs/passcode-lock.svg"
import { Button } from "@/components/ui/button";

export default function ResetPassword() {
    const closeDialog = useCloseDialog("reset-password");
    const [showPassword, setShowPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");

    const handleNext = () => {
        // Handle password reset logic here
        console.log("Current password:", currentPassword);
        closeDialog();
    };

    return (
        <GlobalDialog dialogName="reset-password">
            <DialogContent className="max-w-[400px] rounded-2xl p-8">
                <div className="flex flex-col gap-8">
                    {/* Header with back arrow and lock icon */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-full flex items-center">
                            <button
                                onClick={closeDialog}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <FiArrowLeft className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                        
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                            <img src={pinIcon} alt="pin" className="text-primary/10 w-[23.33px]" />
                        </div>
                        
                        <h2 className="text-2xl font-semibold text-gray-800 text-center">
                            Reset Login Password
                        </h2>
                    </div>

                    {/* Password input section */}
                    <div className="space-y-[4px]">
                        <label className="block text-sm font-medium text-[#6E6E6E]">
                            Enter current login password
                        </label>
                        
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-4 py-[18px]  text-[14px] rounded-md bg-[#F9F9F9] outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            >
                                {showPassword ? (
                                    <FiEyeOff className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <FiEye className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                        
                        <div className="flex justify-end">
                            <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors font-satoshi font-medium cursor-pointer">
                                Forgot password
                            </button>
                        </div>
                    </div>

                    {/* Action button */}
                    <Button
                        onClick={handleNext}
                        disabled={!currentPassword.trim()}
                    >
                        Next
                    </Button>
                </div>
            </DialogContent>
        </GlobalDialog>
    );
} 