import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  sizes?: string[]; 
}

const Motto: React.FC<Props> = ({ className, sizes }) => {
  return (
    <div
      className={cn("space-y-4 relative z-0 text-white text-xl", className, sizes?.at(1) )}
    >
      <h1>
        <span className={cn("motto-fancy-text", sizes?.at(0))}>Nourishing</span>{" "}
        <span>Traditions.</span>
      </h1>
      <h1>
        <span className={cn("motto-fancy-text", sizes?.at(0))}>Embracing</span>{" "}
        <span>Innovation.</span>
      </h1>
      <h1>
        <span className={cn("motto-fancy-text", sizes?.at(0))}>Bringing</span>  {" "}
        <span className="font-bold font-afro">AFRICA</span> {" "}
        <span className="font-satoshi">to the</span>{" "}
        <span>World.</span>
      </h1>
    </div>
  );
};

export default Motto;
