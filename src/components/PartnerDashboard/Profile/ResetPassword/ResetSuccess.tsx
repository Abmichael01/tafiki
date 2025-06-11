import React from "react";
import { BadgeCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResetSuccess: React.FC = () => {
  return (
    <div className="space-y-[60px] ">
      <div className="space-y-[20px] flex flex-col items-center">
        <div className="relative size-fit ">
          <Lock className="size-[100px]" />
          <BadgeCheck className="size-[47.79px] absolute top-[20.5px] right-[-18.5px] fill-[#16A34A] text-white" />
        </div>
        <h1 className="font-[600] text-[#15221B] text-[24px] text-center">
          Login password has successfully been reset
        </h1>
      </div>
      <Link to="/partner/profile" className="w-full">
        <Button className="w-full">Done</Button>
      </Link>
    </div>
  );
};

export default ResetSuccess;
