import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, MapPin, PhoneIcon, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../Others/Logo";
import Motto from "../Others/Motto";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Reward and loyalty programme", link: "/loyalty" },
  { name: "Contact", link: "/contact" },
];

const CustomSeparator: React.FC = () => {
  return (
    <div className="w-[80%]">
      <Separator className="lg:hidden sm:block hidden bg-[#3C474166] " />
    </div>
  );
};

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="section-padding bg-[#15221B] text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start sm:items-center lg:items-start gap-[25px] sm:gap-[40px] lg:gap-[10px] justify-between py-20 w-full">
        {/* Logo and Motto */}
        <div className="space-y-[40px] flex flex-col items-start sm:items-center lg:items-start">
          <Logo color="white" className="w-[112px] h-[55.53px] object-cover" />
          <Motto
            className="flex flex-col items-start sm:items-center lg:items-start  text-nowrap"
            sizes={["text-[32px]", "text-[18px]"]}
          />
        </div>

        <CustomSeparator />

        {/* Navigation Links */}
        <nav className="hidden space-y-[12px] sm:flex flex-col items-start sm:items-center lg:items-start">
          {links.map((link, index) => (
            <Link to={link.link} key={index} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </nav>

        <nav className=" sm:hidden flex flex-col gap-8 text-white p-[15px] bg-[#111C16CC] rounded-[16px] w-full">
          <Link to="/home">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1 justify-between items-center outline-none cursor-pointer w-full">
              Company
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="z-[99999]">
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
        </nav>

        <CustomSeparator />

        {/* Contact Information */}
        <div className="space-y-[40px]">
          <div className="space-y-[20px] flex flex-col items-start sm:items-center lg:items-start">
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <h2 className="text-[18px] text-nowrap">
                1800-121-3637, +91-7052-101-786
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <Mail />
              <h2>info@foodhybrid.co.uk</h2>
            </div>

            <div className="flex items-start gap-2">
              <MapPin />
              <h2 className="flex flex-col items-start sm:items-center lg:items-start gap-2 text-start sm:text-center lg:text-start">
                <span>
                  Hybrid Foods & Mart Limited <br /> Plots 2-6, Owode Street,
                  Lagere <br /> Ile-Ife, Nigeria
                </span>
                <span>
                  Food Hybrid (UK) Limited <br /> 128, City road, London <br />{" "}
                  EC1V 2NX
                </span>
              </h2>
            </div>
          </div>
          <div className="lg:flex hidden lg:block gap-[10px] pl-[32px]">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>

        <CustomSeparator />

        {/* Call to Action */}
        <div className="space-y-[24px] flex flex-col items-center lg:items-start">
          <h2 className="font-semibold sm:font-medium text-[20px] text-nowrap text-center">
            Get started with Food Hybrid <br className="hidden lg:block" />{" "}
            today!
          </h2>
          <button className="bg-white text-[#15221B] rounded-[4px] w-[70%] sm:w-full py-[10px] hover:bg-gray-100 transition">
            Sign up
          </button>
          <div className="flex block lg:hidden justify-center lg:justify-start gap-[40px] lg:gap-[10px] pl-[32px]">
            <FaFacebook className="size-[40px]" />
            <FaInstagram className="size-[40px]" />
            <FaXTwitter className="size-[40px]" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col text-center pb-20 relative ">
        <h2 className="">Copyright © 2024 Food Hybrid. All Rights Reserved</h2>
        <h2 className="absolute -bottom-[clamp(30px,5vw,100px)] left-0 right-0 text-[clamp(50.82px,10vw,177.65px)] text-[127.63px] text-nowrap lg:text-[177.65px] bg-gradient-to-b from-[#FFFFFF]/20 to-[#15221B]/20 font-[700] bg-clip-text text-transparent ">
          Food Hybrid
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
