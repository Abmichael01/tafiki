// LocatedAt.tsx

"use client";

import { MapPin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { slideUpAndFade, staggerContainer } from "@/lib/animations";

const locations = [
  {
    name: "Hybrid Foods & Mart Limited <br /> Plots 2-6, Owode Street, Lagere <br /> Ile-Ife, Nigeria",
    flag: (
      <img
        src="https://flagcdn.com/w320/ng.png"
        alt="Nigerian Flag"
        className="w-[28px]"
      />
    ),
    country: "NG",
  },
  {
    name: "Tafiki Technology LLC <br /> 1523 North Owens Avenue Tyler <br /> Texas 75702, United States",
    flag: (
      <img
        src="https://flagcdn.com/w320/us.png"
        alt="United States Flag"
        className="w-[28px]"
      />
    ),
    country: "US",
  },
];

const LocatedAt: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="section-padding mt-[100px] sm:mt-[180px] flex flex-col gap-[40px]"
    >
      {/* Title */}
      <motion.h2 variants={slideUpAndFade} className="text-center font-[600] text-[24px] text-[#15221B]">
        We're located at
      </motion.h2>

      {/* Locations List */}
      <div className="space-y-[20px] sm:space-y-[40px] text-center font-satoshi">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            variants={slideUpAndFade}
            className="flex flex-col gap-[10px] items-center"
          >
            <div className="p-[12px] bg-[#F4F4F4] flex items-center gap-[8px] rounded-[12px] text-[15px] sm:text-[20px] font-[500]">
              <MapPin className="w-[14px] sm:w-[19.2px]" />
              <span>{location.country}</span>
              {location.flag}
            </div>
            <motion.h1
              dangerouslySetInnerHTML={{ __html: location.name }}
              className="text-[16px] sm:text-[20px] lg:text-[28px] font-[500] text-[#252525]"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LocatedAt;