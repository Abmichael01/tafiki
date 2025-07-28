import Logo from "@/components/Others/Logo";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebarStore";
// import useUserDetailsStore from "@/stores/userStore";
import { LuLayoutGrid, LuPackage } from "react-icons/lu";
import notification from "@/assets/svgs/notification.svg"
import { CiShop } from "react-icons/ci";
import { CiReceipt } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const navs = [
  {
    name: "Overview",
    icon: <LuLayoutGrid className="size-[20px]" />,
    slug: "overview",
    link: "/admin/overview",
  },
  {
    name: "Orders",
    icon: <LuPackage className="size-[20px]" />,
    slug: "orders",
    link: "/admin/orders/?tab=ongoing",
  },
  {
    name: "Partners",
    icon: <HiOutlineUsers className="size-[20px]" />,
    slug: "partners",
    link: "/admin/partners",
  },
  {
    name: "Vendors",
    icon: <CiShop className="size-[20px]" />,
    slug: "vendors",
    link: "/admin/vendors",
  },
  {
    name: "Transactions",
    icon: <CiReceipt className="size-[20px]" />,
    slug: "transactions",
    link: "/admin/transactions",
  },
];

const bottomNavs = [
  {
    name: "Notifications",
    icon: <img src={notification} className="size-[20px]" />,
    slug: "notifications",
    link: "/partner/notifications",
  },
  {
    name: "Admin",
    icon: <FaUserCircle className="size-[20px]" />,
    slug: "admin",
    link: "/partner/admin",
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const currentPath = pathname
  const { isOpen, toggle } = useSidebarStore();

  return (
    <>
      {isOpen && (
        <div
          onClick={toggle}
          className="bg-black/40 fixed inset-0 backdrop-blur-[4px] block lg:hidden"
        ></div>
      )}
      <div className="relative size-fit z-[999]">
        {isOpen && (
          <div
            onClick={toggle}
            className={cn(
              "px-2 py-2 md:hidden rounded-xl bg-white absolute left-[210px] top-[5px] opacity-[0] cursor-pointer",
              isOpen && "opacity-[1]"
            )}
          >
            <FiX className="size-[20px]" />
          </div>
        )}
        <div
          className={cn(
            "w-[205px] fixed lg:sticky h-[100vh] shrink-0 bg-white flex flex-col pb-10 justify-between transition-transform duration-300 ease-in-out z-[9999] transform lg:translate-x-0",
            isOpen ? "translate-x-0" : "-translate-x-[210px]"
          )}
        >
          <div>
            <div className="p-5 flex flex-col gap-5 items-center justify-center">
              <Logo className="w-[115px] h-[48px]" />
              <Separator className="bg-[#F0F0F0] w-full" />
            </div>
            <div className="w-full">
              {navs.map((nav, index) => (
                <Link
                  key={index}
                  to={`${nav.link}`}
                  className={cn(
                    "w-full flex items-center gap-3 px-[30px] py-[12px] text-[#6B7280] hover:bg-[#F9FAFB] transition-colors ",
                    currentPath.includes(nav.link.split("?")[0]) ? "bg-[#15221B1F] text-[#111827] border-r-2 border-r-primary [&_svg]:fill-primary" : ""
                  )}
                  onClick={toggle}
                >
                  {nav.icon}
                  <p className="text-[14px] font-medium">{nav.name}</p>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-1">
            {/* Bottom navigation items */}
            <div className="w-full">
              {bottomNavs.map((nav, index) => (
                <Link
                  key={index}
                  to={`${nav.link}`}
                  className={cn(
                    "w-full flex items-center gap-3 px-[30px] py-[12px] text-[#6B7280] hover:bg-[#F9FAFB] transition-colors",
                    currentPath === nav.slug ? "bg-[#15221B1F] text-[#111827] border-r-2 border-r-[#10B981]" : ""
                  )}
                  onClick={toggle}
                >
                  {nav.icon}
                  <p className="text-[14px] font-medium">{nav.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;