import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { RiBox3Line, RiGift2Line,  } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navs = [
  {
    name: "My Account",
    icon: <IoBagHandleOutline className="size-5" />,
    slug: "portfolio",
    link: "/partner/portfolio",
  },
  {
    name: "Market",
    icon: <FiShoppingBag className="size-5" />,
    slug: "shop",
    link: "/partner/shop",
  },
  {
    name: "My Shop",
    icon: <RiBox3Line className="size-5" />,
    slug: "my-orders",
    link: "/partner/my-orders?tab=processing",
  },
  {
    name: "Rewards",
    icon: <RiGift2Line className="size-5" />,
    slug: "my-rewards",
    link: "/partner/my-rewards",
  },
  {
    name: "Profile",
    icon: <FaCircleUser className="size-6" />,
    slug: "profile",
    link: "/partner/profile",
  },
];

const Taskbar: React.FC = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[2];

  return (
    <div className="fixed lg:hidden bottom-0 left-0 right-0 bg-[#b6dec5]  border-t border-primary/20 shadow-lg z-50">
      <div className="flex items-center justify-around px-2 py-2 max-w-md mx-auto">
        {navs.map((nav) => (
          <Link
            key={nav.slug}
            to={nav.link}
            className={cn(
              "flex flex-col items-center justify-center min-w-0 flex-1 px-1 py-2 rounded-lg transition-all duration-200",
              currentPath === nav.slug
                ? "text-primary"
                : "text-primary/80"
            )}
          >
            <div className={cn(
              "mb-1 transition-transform duration-200",
              currentPath === nav.slug && "scale-120"
            )}>
              {nav.icon}
            </div>
            <span className={cn(
              "text-xs text-center text-nowrap font-medium leading-none",
              currentPath === nav.slug ? "text-primary font-semibold" : "text-primary/80"
            )}>
              {nav.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Taskbar;