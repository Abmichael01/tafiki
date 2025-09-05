// OurFacility.tsx

"use client";

import React from "react";
import haccp from "@/assets/images/haccp.webp";
import { BadgeCheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { slideInRight } from "@/lib/animations";

const OurFacility: React.FC = () => {
  return (
    <div className="section-padding section-spacing">
      <motion.div
        variants={slideInRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2, margin: "-100px 0px 0px 0px" }}
        className="flex flex-col-reverse sm:flex-row gap-y-[20px] justify-between items-center sm:bg-[#F9F9F9] p-10 rounded-xl"
      >
        <h1 className="text-[20px] sm:text-[24px] lg:text-[36px] font-semibold flex flex-col sm:block items-center text-center sm:text-start text-wrap">
          <span>
            Our Facility is HACCP{" "}
            <span className="text-[12px] text-[#15221B] sm:text-[16px] lg:text-[20px] font-satoshi">
              (Hazard Analysis & Critical Control Point)
            </span>
          </span>
          <br className="hidden sm:block" />
          <span className="flex gap-2 items-center">
            Certified
            <BadgeCheckIcon className="inline fill-[#008000] text-white size-[28.6px]" />
          </span>
        </h1>
        <img
          src={haccp}
          alt="HACCP"
          className="h-[112px] sm:w-[281.25px] sm:h-[200px] drop-shadow-2xl drop-shadow-[#EFDE7FEB]"
        />
      </motion.div>
    </div>
  );
};

export default OurFacility;
