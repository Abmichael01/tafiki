// AtFoodHyperbolic.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const AtFoodHybrid: React.FC = () => {
  const gradient =
    "bg-gradient-to-b from-[#15221B] via-[#54886CCC] via-[80%] to-[#15221B] bg-clip-text text-transparent";

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="section-padding mt-[100px] sm:mt-[150px] lg:mt-[200px] text-center"
    >
      <motion.h2
        variants={staggerContainer}
        className="font-[700] text-[20px] sm:text-[32px] lg:text-[35px] leading-tight"
      >
        <motion.span variants={fadeInUp}>
          <span className={gradient}>
            At{" "}
            <span className="text-[#15221BCC]">Food Hybrid</span>, Food is more
            than sustenance. It’s a{" "}
            <span className="text-[#15221BCC]">connection</span> to
          </span>
        </motion.span>

        <motion.span variants={fadeInUp}>
          <span className={gradient}>culture, family, and memory.</span>
        </motion.span>

        <motion.span variants={fadeInUp}>
          <span className={gradient}>
            For Africans abroad, our fresh, flavorful products bring the
          </span>
        </motion.span>

        <motion.span variants={fadeInUp}>
          <span className={gradient}>
            <span className="text-[#15221BCC]">nostalgic</span> and{" "}
            <span className="text-[#15221BCC]">comforting</span> comforting taste
            of home.
          </span>
        </motion.span>
      </motion.h2>
    </motion.section>
  );
};

export default AtFoodHybrid;