import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import passcodeLock from "@/assets/svgs/passcode-lock.svg";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { CiShop } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";

const links = [
  {
    name: "Retail Shop List",
    icon: <CiShop className="size-[20px] stroke-1" />,
    link: "#",
  },
  {
    name: "Beneficiary",
    icon: <FaRegCircleUser className="size-[20px]" />,
    link: "/partner/profile/beneficiary",
  },
  {
    name: "Withdrawal Pin",
    icon: <img src={passcodeLock} alt="" />,
    link: "/partner/profile/withdrawal-pin",
  },
  {
    name: "Reset Password",
    icon: <CiLock className="size-[20px] stroke-1" />,
    link: "/partner/profile/reset-password?current=enterPassword",
  },
  {
    name: "Help and Support",
    icon: <FiHelpCircle className="size-[20px]" />,
    link: "#",
  },
];

const Links: React.FC = () => {
  return (
    <div className="space-y-[12px]">
      {links.map((link, index) => (
        <Link
        to={link.link}
          key={index}
          className="text-[#494949] flex items-center justify-between px-[12px] py-[12px] bg-[#f3f3f3] rounded-[8px] "
        >
          <div className="flex items-center  gap-2">
            <div className="text-[#494949]">
            {link.icon}
            </div>
            <p className="text-[#333333]">{link.name}</p>
          </div>

          <FiChevronRight />
        </Link>
      ))}
    </div>
  );
};

export default Links;
