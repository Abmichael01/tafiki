import { Copy } from "lucide-react";
import React from "react";
import { Toast } from "./Toast";
import { toast } from "sonner";

type ContactItem = {
  label: string;
  value: string;
  icon?: React.ElementType;
  copy?: boolean;
};

type ContactDetailsProps = {
  data: ContactItem[];
};

const ContactDetails: React.FC<ContactDetailsProps> = ({ data }) => {
  // Copy to clipboard handler
  const handleCopy = (value: string) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(value);
    }
    toast.custom(() => (
        <Toast text="Copied to clipboard" icon={<Copy />} />
    ));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] sm:gap-[20px] rounded-[4px] py-[4px]">
        {data.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex-1 bg-[#F9F9F9] rounded-[8px] p-[8px] flex flex-col gap-[8px] min-w-0"
            >
              <span className="text-[12px] text-[#929292] font-satoshi font-[400] leading-none">
                {item.label}
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-satoshi font-bold text-[15px] sm:text-[16px] leading-none text-[#1C274C] break-all">
                  {item.value}
                </span>
                {/* Show copy button if copy is true */}
                {item.copy ? (
                  <button
                    type="button"
                    className="text-[#929292] text-xs px-2 py-1 rounded hover:bg-[#e5e7eb] transition"
                    onClick={() => handleCopy(item.value)}
                    title="Copy"
                  >
                    <Copy className="size-[16px]" />
                  </button>
                ) : (
                  // Only show icon if copy is not true and icon exists
                  Icon && <Icon className="text-[#929292] w-4 h-4" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;
