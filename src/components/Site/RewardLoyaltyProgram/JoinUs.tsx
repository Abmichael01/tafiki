// JoinUs.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import growth from "@/assets/images/growth.webp";
import {
  fadeInUp,
  slideInLeft,
  zoomIn,
  staggerContainer,
} from "@/lib/animations";

const JoinUs: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="h-fit sm:h-[901px] mt-[120px] sm:mt-[180px] relative w-full sm:py-[80px] sm:px-[50px] flex flex-col sm:flex-row gap-[50px]"
    >
      {/* Content */}
      <motion.div
        variants={slideInLeft}
        className="relative z-[1] space-y-[10px] sm:space-y-[20px] px-5 sm:px-0 "
      >
        <h1 className="text-[20px] sm:text-[24px] lg:text-[40px] font-[700]">
          Join Our Rewards and Loyalty <br /> Program Today!
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-[500] text-[#494949] leading-[28px]">
          At Food Hybrid Ltd, we believe in rewarding those who help us bring{" "}
          <br />
          our innovative products to market. Our Rewards and Loyalty Program is{" "}
          <br />
          here to support your business, reward your hard work, and build a{" "}
          <br />
          lasting, successful partnership.
        </p>
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="button max-[600px]:text-[15px] bg-[#15221BCC] text-white mt-[40px] sm:mt-[60px]"
        >
          Become a partner
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.img
        variants={fadeInUp}
        src={growth}
        alt=""
        className="sm:absolute inset-0 h-[245.8px] w-full sm:h-full object-cover"
      />

      {/* Bold Background Text */}
      <motion.h2
        variants={zoomIn}
        className="text-center w-full absolute left-0 right-0 bottom-0 text-nowrap text-transparent bg-transparent font-bold text-[clamp(21.07px,8vw,124px)] z-[10]"
        style={{ WebkitTextStroke: "1.4px white" }}
      >
        Let’s grow together!
      </motion.h2>
    </motion.section>
  );
};

export default JoinUs;