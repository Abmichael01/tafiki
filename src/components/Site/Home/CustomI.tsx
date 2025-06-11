import { Stars } from "lucide-react";
import React from "react";

const CustomI: React.FC = () => {
  return (
    <p className="relative inline items-center bg-gradient-to-b from-[#FFFFFF60] to-[#15221B60] bg-clip-text text-transparent ">
      {/* The letter stem */}
      <span className="">i</span>

      {/* The star as the dot */}
      <span className="absolute bg-background p-1 rounded-full text-foreground top-[12px] left-1/2 -translate-x-1/2">
        <Stars size={12} />
      </span>
    </p>
  );
};

export default CustomI;
