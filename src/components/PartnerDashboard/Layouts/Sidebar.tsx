import Logo from "@/components/Others/Logo";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiShoppingBag, FiX } from "react-icons/fi";
import { RiBox3Line, RiGift2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FaCircleUser } from "react-icons/fa6";
import { useSidebarStore } from "@/stores/sidebarStore";
import { IoGlobeOutline } from "react-icons/io5";
import useUserDetailsStore from "@/stores/userStore";

const navs = [
  {
    name: "My Account",
    icon: <IoBagHandleOutline />,
    slug: "portfolio",
    link: "/partner/portfolio",
  },
  {
    name: "Market",
    icon: <FiShoppingBag />,
    slug: "shop",
    link: "/partner/shop",
  },
  {
    name: "My Shop",
    icon: <RiBox3Line />,
    slug: "my-orders",
    link: "/partner/my-orders?tab=processing",
  },
  {
    name: "My Rewards",
    icon: <RiGift2Line />,
    slug: "my-rewards",
    link: "/partner/my-rewards",
  },
  {
    name: "Visit Website",
    icon: <IoGlobeOutline />,
    slug: "visit-website",
    link: "/home",
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[2];
  const { isOpen, toggle } = useSidebarStore();
  const { userDetails } = useUserDetailsStore()

  return (
    <>
      {isOpen && (
        <div
          onClick={toggle}
          className="bg-black/40 fixed inset-0 backdrop-blur-[4px] block lg:hidden"
        ></div>
      )}
      <div className="relative size-fit z-[99999]">
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
            "w-[205px] left-[-210px] lg:left-[0] fixed lg:sticky h-[100vh] shrink-0 bg-white flex flex-col gap-4 pb-10 justify-between transition-all duration-500 z-[9999]",
            isOpen && "left-[0] "
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
                    "w-full flex items-center gap-2 px-[30px] py-[10px]",
                    currentPath === nav.slug ? "bg-[#15221B1F]" : ""
                  )}
                  onClick={toggle}
                >
                  {nav.icon}
                  <p className="text-[16px]">{nav.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-[12px]">
            <Link
              to="/partner/profile"
              className={cn(
                "flex justify-center uppercase items-center gap-[4px] w-full text-[16px] py-[10px]",
                currentPath === "profile" ? "bg-[#15221B1F]" : ""
              )}
              onClick={toggle}
            >
              <FaCircleUser className="size-[20px] text-[#494949]" />
              {userDetails?.personal_details.username}
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
