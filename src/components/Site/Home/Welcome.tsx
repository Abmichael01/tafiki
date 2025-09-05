// Welcome.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Logo from "@/components/Others/Logo";
import GlobalFootprint from "./GlobalFootprint";


const Welcome: React.FC = () => {
  return (
    <div className="section-padding section-spacing relative">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col items-center justify-center text-center gap-[40px] w-full md:max-w-[80%] mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="font-satoshi text-[#AEAEAE] text-[40px] leading-none font-[700] flex items-center justify-center gap-2"
        >
          {" "}
          <h1 className="relative">
            What is
            <img src="/crown.svg" alt="" className="absolute top-[-100%] left-[-60px]" />
          </h1>{" "}
          <Logo noLink />
          {"?"}
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          className="flex flex-col items-center justify-center gap-[20px] font-[500] font-satoshi text-[20px]"
        >
          <motion.p variants={fadeInUp}>
            Tafiki is a revolutionary food logistics brand transforming the way
            food moves.
          </motion.p>
          <motion.p variants={fadeInUp}>
            We use AI, Data, and a Virtual Distribution model to bridge the gap
            between food producers, processors, and retailers, without
            warehouses or middlemen.
          </motion.p>
          <motion.p variants={fadeInUp}>
            We connect virtual distributors with retail shops in a seamless food
            logistics platform. Retail-ready food products funded by virtual
            distributors, fulfilled by Hybrid, paid for only after sales.
          </motion.p>
        </motion.div>
      </motion.div>

      <GlobalFootprint />
    </div>
  );
};

export default Welcome;
