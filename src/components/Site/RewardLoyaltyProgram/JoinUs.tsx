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
import { Link } from "react-router-dom";

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
        className="relative z-[1] space-y-[10px] sm:space-y-[20px] px-5 sm:px-0 sm:max-w-[65%]"
      >
        <h1 className="text-[20px] sm:text-[24px] lg:text-[40px] font-[700] font-gilroy">
          Join Our Rewards and Loyalty Program Today!
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-[500] text-[#252525] leading-[28px] ">
          At Tafiki, we believe in rewarding those who help us bring our
          innovative products to market. Our Rewards and Loyalty Program is here
          to support your business, reward your hard work, and build a lasting,
          successful partnership.
        </p>
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className=""
        >
          <Link
            to="/partner"
            className="px-5 py-2 rounded-full bg-primary text-[14px] sm:text-[16px] text-white mt-[45px] w-fit inline-block"
          >
            Become a partner
          </Link>
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
