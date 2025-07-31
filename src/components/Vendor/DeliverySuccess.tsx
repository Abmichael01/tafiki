import { BadgeCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function DeliverySuccess() {
  return (
    <div className="mt-30 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-3 w-full">
        {/* Success Icon */}
        <BadgeCheck className="size-35 text-white fill-[#16A34A] stroke-white -mb-4" />
        {/* Title */}
        <h1 className="text-[20px] font-bold text-center text-primary">
          Delivery Complete
        </h1>
        {/* Subtitle */}
        <p className="text-[14px] text-[#6E6E6E] text-center font-satoshi font-medium -mt-3">
          Your Order has successfully been delivered
        </p>
        {/* Button */}
        <Link to="/vendor/delivery-form?current=1" className="w-full max-w-[370px]">
          <Button className="w-full  bg-[#15221B] text-white text-[16px] font-medium rounded-lg h-12 mt-2">
            Done
          </Button>
        </Link>
      </div>
    </div>
  );
}   
