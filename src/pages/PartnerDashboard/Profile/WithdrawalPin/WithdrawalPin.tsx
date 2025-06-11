import { cn } from "@/lib/utils";
import useUserDetailsStore from "@/stores/userStore";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";



const WithdrawalPin: React.FC = () => {
  const { userDetails } = useUserDetailsStore() 
  const links = [
  {
    name: "Check withdrawal PIN",
    link: "check-pin",
  },

  {
    name: userDetails?.has_pin ? "Change withdrawal PIN" : "Set withdrawal PIN",
    link: "change-pin?current=enterPin",
  },
];
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile">
            <GoArrowLeft className="size-[24px]" />
        </Link>
          <h1 className="text-[24px]">Withdrawal PIN</h1>
        </div>
      </div>
      <div className="space-y-[12px]">
        {links.map((link, index) => (
          <Link
            to={`/partner/profile/withdrawal-pin/${link.link}`}
            key={index}
            className={cn(
              "bg-[#F9F9F9] px-[24px] py-[18px] flex items-center rounded-[4px] justify-between font-satoshi",
              !userDetails?.has_pin && link.link === "check-pin" && "hidden"
            )}
          >
            <h1 className="text-[18px] font-[500]">{link.name}</h1>
            <FaChevronRight />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WithdrawalPin;
