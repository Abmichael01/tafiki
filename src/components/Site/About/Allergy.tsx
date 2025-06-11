// Allergy.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import allergyImage from "@/assets/images/allergy.webp";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";

const Allergy: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="section-padding flex mt-[100px] sm:mt-[150px] lg:mt-[200px]"
    >
      <motion.div
        variants={staggerContainer}
        className="sm:bg-[#F9F9F9] flex flex-col sm:flex-row items-center rounded-[24px] gap-[20px] sm:gap-[47px] py-[28px] sm:px-[47px]"
      >
        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          className="space-y-[12px] lg:space-y-[20px] flex-1"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[24px] sm:text-[28px] lg:text-[40px] font-[600] text-[#15221B]"
          >
            Allergy Awareness
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[16px] sm:text-[18px] lg:text-[24px] font-[500] font-satoshi text-start"
          >
            Allergy safety is a priority in our production. Our team is fully
            trained to adhere to HACCP protocols to prevent cross-contamination,
            ensuring rigorous food safety management to protect consumers'
            health.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.img
          variants={slideInLeft}
          src={allergyImage}
          alt="Allergy Awareness"
          className="w-full sm:w-[45%] h-[283px] sm:h-[251.28px] lg:h-auto shrink-1 rounded-[12px] object-cover object-top"
        />
      </motion.div>
    </motion.section>
  );
};

export default Allergy;