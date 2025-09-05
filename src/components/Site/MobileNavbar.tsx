import Logo from "@/components/Others/Logo";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebarStore";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import useAuthStore from "@/stores/authStore";

const navItems = [
  { name: 'Home', href: '/home' },
  { name: 'About Us', href: '/about' },
  { name: 'Reward & Loyalty', href: '/reward-loyalty-program' },
  { name: 'Contact', href: '/contact' }
]

const MobileNavbar: React.FC = () => {
  const { isOpen, toggle } = useSidebarStore();
  const { isAuthenticated } = useAuthStore()
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ left: "-400px", opacity: 0 }}
          animate={{ left: "0px", opacity: 1 }}
          exit={{ left: "-400px", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "w-[300px] lg:hidden fixed top-0 h-[100vh] bg-white shrink-0 flex flex-col gap-4 pb-10 justify-between border shadow-xl z-[19234]"
          )}
        >
          <div className="space-y-8 flex flex-col">
            <div className="p-10 flex flex-col gap-5 items-center justify-center">
              <div className="flex justify-between items-center w-full">
                <Logo className="w-[83px] h-[44px]" />
                <div
                  onClick={toggle}
                  className="size-[40px] cursor-pointer flex justify-center items-center border shadow-md rounded-full"
                >
                  <X />
                </div>
              </div>
              <p className="text-[16px]">
                Let’s grow something impactful together <br />
                <span className="text-[12px]">
                  Track ROI. Invest smart. Feed nations
                </span>
              </p>
              <Separator className="bg-[#F0F0F0] w-full" />
            </div>

            <nav className="flex flex-col gap-8 text-[#252525] px-10">
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} onClick={toggle} className="text-[#5D5D5D] hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ))}
              <Link onClick={toggle} to={isAuthenticated ? "partner/portfolio" : "/partner"} className="w-full shadow-xl">
                <button className="bg-[#15221B] w-full cursor-pointer rounded-sm border border-primary text-white py-[10px] px-7 ">
                  {isAuthenticated ? "Dashboard" : "Login"}
                </button>
              </Link>
            </nav>

            <div className="flex gap-[40px] items-center justify-center px-10">
              <Link to="#" className="rounded-full shadow-lg">
                <FaFacebook className="size-[40px] lg:size-[45px] fill-[#252525]/80 text-white " />
              </Link>
              <Link
                to="#"
                className="size-[40px] lg:size-[60px] bg-[#252525]/80 flex items-center justify-center rounded-full shadow-lg"
              >
                <FaInstagram className="size-[25px] lg:size-[45px] text-white" />
              </Link>
              <Link
                to="#"
                className="size-[40px] lg:size-[60px] bg-[#252525]/80 flex items-center justify-center rounded-full shadow-lg"
              >
                <FaXTwitter className="size-[25px] lg:size-[45px] text-white" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
