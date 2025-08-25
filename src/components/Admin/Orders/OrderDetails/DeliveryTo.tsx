import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/getInitial";
import { Order } from "@/types/admin";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";
interface DeliveryToProps {
  data: Order
}

export default function DeliveryTo({
  data
}: DeliveryToProps) {
  return (
    <div className="space-y-4 border-y py-[20px] flex justify-between items-center">
      <div> 
        <h2 className="font-[600] text-[18px]">Delivery to</h2>
        <div className="flex items-center space-x-4 py-4 font-satoshi">
          {/* Avatar */}
          <Avatar className="size-10">
            <AvatarImage src={data.vendor_picture} alt="@shadcn" />
            <AvatarFallback>{getInitials(data.vendor_name)}</AvatarFallback>
          </Avatar>

          {/* Content */}
          <div>
            {/* Company Name */}
            <p className="text-[18px] font-[700] text-[#252525]">
              {data.vendor_name}
            </p>

            {/* Address */}
            <p className="text-[16px] font-[500] text-[#6E6E6E]">{data.vendor_address}</p>
          </div>
        </div>
      </div>
      <Link
        to={`?dialog=vendor-delivery-details&status=${data.status}`}
        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition"
      >
        <HiOutlineDocumentText className="w-5 h-5 text-primary" />
        View delivery status
      </Link>
    </div>
  );
}
