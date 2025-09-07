// OurStandards.tsx

"use client";

import React from "react";
import nepc from "@/assets/svgs/nepc.svg";
import fca from "@/assets/svgs/fca.svg";
import fda from "@/assets/svgs/fda.svg";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/lib/animations";

const standards = [
  {
    name: "Nigerian Export Promotion <br />  Council (NIG)",
    logo: nepc,
  },
  {
    name: "Financial Conduct Authority <br /> (UK)",
    logo: fca,
  },
  {
    name: "Food and Drug <br /> Administration (USA & UK)",
    logo: fda,
  },
];

const OurStandards: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="section-padding section-spacing"
    >
      <div className="flex flex-col items-center gap-10 ">
        <motion.h1
          variants={zoomIn}
          className="section-title"
        >
          Our Standards
        </motion.h1>
        <motion.p
          variants={zoomIn}
          className="sm:text-[16px] lg:text-[18px] text-[#929292] text-center px-5"
        >
          We are Licensed and Certified by:
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        className="flex flex-col sm:flex-row gap-y-[40px] justify-between items-center w-full mt-10"
      >
        {standards.map((standard, index) => (
          <motion.div
            key={index}
            variants={zoomIn}
            className="flex flex-col gap-[20px] items-center"
          >
            <img
              src={standard.logo}
              alt=""
              className="h-[80px] sm:h-[60px] lg:h-auto transform transition-transform hover:scale-105 duration-300"
            />
            <h1
              className="text-center text-[16px] sm:text-[18px] font-semibold text-wrap"
              dangerouslySetInnerHTML={{ __html: standard.name }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurStandards;