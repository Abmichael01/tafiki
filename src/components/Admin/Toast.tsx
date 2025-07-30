import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
    text?: string;
    decline?: boolean;
    icon: React.ReactNode;
}

export const Toast = ({ text, decline, icon }: ToastProps) => {
    return (
        <div className="flex items-center gap-[8px] justify-between rounded-lg px-3 py-[12px] text-[#15221B] bg-white w-fit shadow-xl">
            <div className="[&_svg]:size-[18px]">
                {icon}
            </div>
            <span className="flex-1 font-satoshi font-bold text-[14px] leading-none">
                {text}
            </span>
            {decline ? <X className="size-[20px] text-white bg-[#15221B] rounded-full p-1" /> : <CheckCircle2 className="size-[25px] text-white fill-[#15221B]" />}
        </div>
    );
};