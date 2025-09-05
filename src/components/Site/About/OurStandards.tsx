// OurStandards.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import haccp from "@/assets/images/haccp.webp";
import nepc from "@/assets/svgs/nepc.svg";
import fca from "@/assets/svgs/fca.svg";
import fda from "@/assets/svgs/fda.svg";
import {
  fadeInUp,
  staggerContainer,
} from "@/lib/animations"; // Make sure these exist in your animations.ts

const standards = [
  {
    name: "Hazard Analysis & Critical <br /> Control Point",
    logo: haccp,
  },
  {
    name: "Nigerian Export Promotion <br /> Council (NIG)",
    logo: nepc,
  },
  {
    name: "Financial Conduct <br /> Authority (UK)",
    logo: fca,
  },
  {
    name: "Food and Drug <br /> Administration (USA & UK)",
    logo: fda,
  },
];

const OurStandards: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="section-padding space-y-[60px] mt-[80px]"
    >
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center gap-[20px] sm:gap-[40px]"
      >
        <div className="space-y-[10px] sm:space-y-[40px] text-center">
          <motion.h1 variants={fadeInUp} className="section-title">
            Our Standards
          </motion.h1>
        </div>

        <motion.div
          variants={staggerContainer}
          className="space-y-[40px] w-full"
        >
          <motion.p
            variants={fadeInUp}
            className="sm:text-[16px] lg:text-[18px] text-[#929292] text-center"
          >
            We are Licensed and Certified by:
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row justify-between items-center gap-y-[40px] w-full"
          >
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col gap-[20px] items-center"
              >
                <img
                  src={standard.logo}
                  alt=""
                  className="h-[80px] object-contain"
                />
                <motion.h1
                  variants={fadeInUp}
                  dangerouslySetInnerHTML={{ __html: standard.name }}
                  className="text-center text-[16px] sm:text-[18px] font-semibold"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OurStandards;