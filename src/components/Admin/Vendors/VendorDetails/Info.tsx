import { API_BASE_URL } from "@/api/apiClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";
import { Vendor } from "@/types/admin";

export default function Info({ data }: { data?: Vendor }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="flex items-center gap-[12px]">
        <Avatar className="size-[64px]">
          <AvatarImage
            src={API_BASE_URL + data?.profile_picture?.toString()}
            className="size-[64px]"
          />
          <AvatarFallback className="size-[64px]">
            {getInitials(data?.store_name as string)}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-[2px] sm:space-y-[4px] font-satoshi">
          <h2 className="text-[20px] sm:text-[24px] font-[900]">
            {data?.store_name}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-[500] text-[#929292]">
            {data?.store_name} | {data?.store_email}
          </p>
        </div>
      </div>
    </div>
  );
}
