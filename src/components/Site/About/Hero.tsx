// Hero.tsx

"use client";

import React from "react";
import africa from "@/assets/images/africa.webp";
import hand from "@/assets/images/hand.webp";
import greenEarth from "@/assets/images/greenEarth.webp";
import { motion } from "framer-motion";
import { slideInLeft, bounceIn } from "@/lib/animations";

const Hero: React.FC = () => {
  return (
    <div className="section-padding pl-0 relative h-[600px] sm:h-[500px] lg:h-[709px] flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between justify-center">
      {/* Left Content */}
      <motion.div
        variants={slideInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-[28px] relative z-[1] w-full sm:w-[60%] mt-[100px] sm:mt-0"
      >
        <motion.h2
          variants={bounceIn}
          className="about-us-text bg-clip-text text-transparent font-[700]"
        >
          ABOUT US
        </motion.h2>

        <motion.h2
          variants={bounceIn}
          className="text-[28px] lg:text-[48px] font-[600]"
        >
          Bridging{" "}
          <span className="font-afro font-[400]">AFRICA</span>'s Rich
          Agricultural Heritage with the World
          <motion.img
            src={greenEarth}
            alt=""
            className="inline size-[48px] ml-2"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />
        </motion.h2>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        variants={bounceIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative self-end sm:self-center"
      >
        <motion.img
          src={africa}
          alt=""
          className="w-[232.3px] h-[248.0px] sm:w-[211.65px] sm:h-[225.8px] lg:w-[365.5px] lg:h-[390.0px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.img
          src={hand}
          alt=""
          className="absolute right-0 top-[40px] w-full h-[200px] sm:h-[182.43px] sm:w-[357.9px] lg:h-[315px] lg:w-[618px] object-contain"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;