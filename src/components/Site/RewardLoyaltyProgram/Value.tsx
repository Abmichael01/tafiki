// Value.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import value from "@/assets/images/value.webp";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";

const Value: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="section-padding space-y-[10px] mt-[120px] sm:mt-[0]"
    >
      <motion.h1
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-[20px] sm:text-[32.11px] lg:text-[44px] font-[600] text-center"
      >
        We understand that{" "}
        <span className="font-distant-stroke font-[500] text-[32px] sm:text-[60px]">
          You
        </span>
        , our <br /> Distributors, are at the heart of our <br /> success
      </motion.h1>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="sm:bg-[#F9F9F9] sm:px-[47px] py-[28px] rounded-[24px] flex flex-col-reverse sm:flex-row gap-[47px] items-center"
      >
        <motion.img
          variants={slideInRight}
          src={value}
          alt=""
          className="w-full sm:w-1/2 rounded-[7.99px] sm:rounded-[24px]"
        />

        <motion.div variants={fadeInUp} className="space-y-[20px]">
          <h2 className=" text-[19px] sm:text-[28px] lg:text-[40px] text-[#15221B] font-[600]">
            We Value You
          </h2>
          <div className="space-y-[10px] text-[15px] sm:text-[18px] sm:text-[20px] font-[500] text-[#494949]">
            <p>
              So, we went ahead to create an exciting and rewarding Loyalty
              Program to give back and support your growth.
            </p>
            <p>
              From newcomers to top performers, we’ve got a range of rewards
              that recognize your hard work, loyalty, and commitment to bringing
              innovative food hybrids to market.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Value;
