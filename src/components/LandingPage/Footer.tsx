import React from "react";
import Logo from "../Others/Logo";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer: React.FC = () => {
  return (
    <div className="section-padding flex gap-10 flex-col-reverse sm:flex-row items-center justify-between w-full mt-[120px]">
      <Logo className="sm:w-[182.4px] sm:h-[97.02px] lg:w-[315px] lg:h-[167.5px] sm:ml-[82.82px]" />
      <div className="flex gap-5">
        <Link to="/">
          <Button className="sm:px-10 px-5 py-[10px] bg-[#15221B] hover:bg-[#15221B]/90">
            <div className="flex gap-2 items-center">
              Visit Our website
            </div>
          </Button>
        </Link>
        <Link to="/partner">
          <Button className="sm:px-10 px-5 py-[10px] bg-[#15221B] hover:bg-[#15221B]/90">
            <div className="flex gap-2 items-center">
              Go to shop
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
