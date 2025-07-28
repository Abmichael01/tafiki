import { CheckCircle2, Upload, X } from "lucide-react";

interface ToastProps {
    text?: string;
    decline?: boolean;
}

export const Toast = ({ text, decline }: ToastProps) => {
    return (
        <div className="flex items-center gap-[12px] justify-between rounded-lg px-3 py-[12px] text-[#15221B] bg-white w-fit shadow-xl">
            <Upload className="size-[20px]" />

            <span className="flex-1 font-satoshi font-bold text-[18px] leading-none">
                {text}
            </span>
            {decline ? <X className="size-[25px] text-white bg-[#15221B] rounded-full p-1  " /> : <CheckCircle2 className="size-[25px] text-white fill-[#15221B]" />}
        </div>
    );
};