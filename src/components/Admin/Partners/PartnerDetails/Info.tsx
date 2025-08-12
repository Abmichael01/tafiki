import { Partner } from "@/types/admin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";

export default function Info({ data }: { data?: Partner }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="flex items-center gap-[12px]">
        <Avatar className="size-[76px]">
          <AvatarImage src={data?.profile_picture} alt="@shadcn" />
          <AvatarFallback>{getInitials(data?.name as string)}</AvatarFallback>
        </Avatar>
        <div className="space-y-[2px] sm:space-y-[4px] font-satoshi">
          <h2 className="text-[20px] sm:text-[24px] font-[900]">
            {data?.name}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-[500] text-[#929292]">
            {data?.username} | {data?.email}
          </p>
        </div>
      </div>
    </div>
  );
}
