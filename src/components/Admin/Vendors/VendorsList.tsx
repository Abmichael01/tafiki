import { Vendor } from "@/types/admin";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, X } from "lucide-react";

export default function VendorsList({ data }: { data: Vendor[] }) {
  console.log(data);
  return (
    <div className="bg-white text-sm overflow-hidden font-satoshi">
      {/* Table */}
      <div className="overflow-x-auto fancy-scrollbar">
        <table className="min-w-full table-auto text-center border-collapse overflow-x-auto text-nowrap overflow-hidden">
          <thead>
            <tr className="text-[15px] text-[#6E6E6E] bg-[#F9F9F9] font-medium">
              <th className="px-4 py-2">Details</th>
              <th className="px-4 py-2">Owner</th>
              <th className="px-4 py-2">Today's Remittance</th>
              <th className="px-4 py-2">Total Remittance</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data?.map((user) => (
              <tr key={user.id}>
                {/* Details: Avatar, Name, Email */}
                <td className="px-4 py-3">
                  <Link
                    to={`/admin/vendors/${user.vendor_id}`}
                    className="flex items-center gap-3 max-[500px]:mr-10"
                  >
                    <Avatar >
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="size-[36px]"
                      />
                      <AvatarFallback className="size-[36px]">
                        {getInitials(user.store_name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold text-[15px]">
                        {user.store_name}
                      </div>
                      <div className="text-[14px] font-[500] text-[#929292]">
                        {user.store_email}
                      </div>
                    </div>
                  </Link>
                </td>
                {/* Owner */}
                <td className="px-4 py-3 font-semibold  text-[15px]">
                  {user.store_name}
                </td>
                {/* Today's Remittance */}
                <td className="px-4 py-3 font-semibold text-[15px]">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-[14px]">£{user.today_remittance?.toLocaleString("en-GB")}</p>
                    <TooltipProvider>
                      <div className="flex items-center gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className="size-[25px]">
                              <Check className="size-[15px]" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Accept</p>
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" className="size-[25px]">
                              <X className="size-[15px]" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Decline</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TooltipProvider>
                  </div>
                </td>
                {/* Total Remittance */}
                <td className="px-4 py-3 font-semibold text-[15px]">
                  £{user.total_remittance?.toLocaleString("en-GB")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
