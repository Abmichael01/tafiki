"use client";
import React from "react";
import nigeria from "@/assets/svgs/nigeria.svg";
import uk from "@/assets/svgs/uk.svg";
import usa from "@/assets/svgs/usa.svg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const countries = [
  {
    name: "Nigeria",
    shortName: "NG",
    logo: nigeria,
    className: "sm:mr-40",
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    logo: uk,
    className: "",
  },
  {
    name: "United States of America",
    shortName: "USA",
    logo: usa,
    className: "sm:ml-20",
  },
];

const GlobalFootprint: React.FC = () => {
  return (
    <div className="space-y-5  section-spacing">
      <h1 className="section-title">
        Our Global Footprint
      </h1>
      <motion.h1
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center sm:text-[16px] lg:text-[20px] text-[#929292]"
      >
        With Operations In:
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-3 sm:justify-center justify-between sm:max-w-[70%] lg:max-w-[50%] max-w-[90%] mx-auto"
      >
        {countries.map((country, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={cn(
              "flex flex-col justify-between items-center gap-5",
              country.className
            )}
          >
            <img
              src={country.logo}
              alt=""
              className="w-[60px] h-[60px] sm:w-[37.06px] sm:h-[37.06px] lg:w-[112.5px] lg:h-[112.5px] object-contain shrink-0"
            />
            <h1 className="hidden sm:block text-[18px] font-semibold text-center text-nowrap">
              {country.name}
            </h1>
            <h1 className="sm:hidden text-[18px] font-semibold text-center">
              {country.shortName}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GlobalFootprint;
