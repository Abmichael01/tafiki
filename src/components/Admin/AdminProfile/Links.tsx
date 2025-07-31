import { FiLock, FiKey, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { PiPackage } from "react-icons/pi";
import pinIcon from "@/assets/svgs/passcode-lock.svg"

const links = [
  {
    label: "Manage products",
    icon: <PiPackage className="size-5 text-[#6B7280]" />,
    to: "manage-products",
  },
  {
    label: "Vendor list",
    icon: <CiShop className="size-5 text-[#505660]" />,
    to: "vendors-list",
  },
  {
    label: "Reset login password",
    icon: <FiLock className="size-5 text-[#6B7280]" />,
    to: "?dialog=reset-password",
  },
  {
    label: "Withdrawal PIN",
    icon: <img src={pinIcon} alt="pin" className="size-5 text-[#6B7280]" />,
    to: "withdrawal-pin",
  },
];

export default function Links() {
  return (
    <div className="w-full flex flex-col gap-[12px]">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className={`flex items-center gap-3 px-4 py-4 text-sm hover:bg-[#F9F9F9] transition-colors`}
        >
          {link.icon}
          <span className="font-normal">{link.label}</span>
        </Link>
      ))}
      <Link to="/admin/profile?dialog=logout" className="flex mt-20 items-center gap-3 text-[#B52217] px-4 py-4 text-sm hover:bg-[#B52217]/5 transition-colors rounded-lg w-fit">
        <FiLogOut className="size-5" />
        <span className="font-normal">Log out</span>
      </Link>
    </div>
  );
}