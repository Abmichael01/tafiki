import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ConfirmSuccess: React.FC = () => {
  return (
    <div className="space-y-[60px] ">
      <div className="space-y-[20px] flex flex-col items-center">
        <div className="relative size-fit ">
          <FaUserCircle className="size-[100px]" />
          <BadgeCheck className="size-[47.79px] absolute top-[-15.5px] right-[-18.5px] fill-[#16A34A] text-white" />
        </div>
        <h1 className="font-[600] text-[#15221B] text-[24px] text-center">
        <span className="font-[700]">Jack Segun Dairo</span> has successfully been added as a beneficiary
        </h1>
      </div>
      <Link to="/partner/profile/beneficiary" className="w-full">
        <Button className="w-full">Done</Button>
      </Link>
    </div>
  );
};

export default ConfirmSuccess;
