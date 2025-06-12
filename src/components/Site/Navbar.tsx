import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, MenuIcon } from "lucide-react";

import Logo from "../Others/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import MobileNavbar from "./MobileNavbar";
import { useSidebarStore } from "@/stores/sidebarStore";
import useAuthStore from "@/stores/authStore";

const Navbar: React.FC = () => {
  const { isOpen, toggle } = useSidebarStore();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore()
  return (
    <>
      <header
        className={cn(
          "section-padding bg-transparent w-full fixed flex justify-between items-center py-6 top-0 left-0 right-0 z-[9999] backdrop-blur-xl"
        )}
      >
        {/* Logo */}
        <Logo color="black" className="w-[83px] h-[44px]" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center text-[#252525]">
          <Link to="/home">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1 items-center outline-none cursor-pointer">
              Company
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="z-[9999]">
              <DropdownMenuItem onClick={() => navigate("/about")}>
                About us
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/reward-loyalty-program")}
              >
                Rewards & Loyalty Program
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/contact">Contact</Link>
          <Link to={isAuthenticated ? "partner/portfolio" : "/partner"}>
            <button className="bg-transparent hover:bg-transparent text-[#252525] rounded-sm border border-primary py-[5px] px-7 ">
              {isAuthenticated ? "Dashboard" : "Login"}
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none z-[99999] cursor-pointer"
          onClick={toggle}
        >
          <MenuIcon className="w-10 h-10 text-[#252525]" />
        </button>

        <MobileNavbar />

        {isOpen && (
          <div
            onClick={toggle}
            className="lg:hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black/50 z-[99]"
          ></div>
        )}
      </header>
    </>
  );
};

export default Navbar;
