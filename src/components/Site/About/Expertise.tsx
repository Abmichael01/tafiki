// Expertise.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import patterns from "@/assets/images/patterns.webp";
import { fadeInUp, zoomIn, staggerContainer } from "@/lib/animations";

const Expertise: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="section-padding mt-[100px] sm:mt-[150px] lg:mt-[200px] relative h-[237px] sm:h-[304.9px] lg:h-[400px]"
    >
      {/* Background Pattern Circle */}

      <motion.img
        variants={{
          initial: { opacity: 0, y: 20 }, // or whatever start state
          animate: {
            opacity: 0.4,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        src={patterns}
        alt=""
        className="absolute rounded-full size-[237px] sm:size-[304.9px] lg:size-[400px] left-[50%] translate-x-[-50%]"
      />

      {/* Content Wrapper */}
      <motion.div
        variants={staggerContainer}
        className="relative z-[1] flex flex-col items-center justify-center h-full text-center"
      >
        {/* "With" Text */}
        <motion.p
          variants={fadeInUp}
          className="text-[14px] sm:text-[20px] lg:text-[28px] font-[500] font-satoshi"
        >
          With
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          variants={zoomIn}
          className="font-[700] text-[24px] sm:text-[44px] lg:text-[60px]"
        >
          30+ years{" "}
          <motion.span
            variants={zoomIn}
            className="font-distant-stroke font-[500] text-[32px] sm:text-[60px] lg:text-[72px]"
          >
            of Expertise
          </motion.span>
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
          variants={fadeInUp}
          className="font-satoshi text-[18px] sm:text-[20px] lg:text-[26px] text-center text-[#252525] font-[700] max-w-[800px]"
        >
          Our team blends Traditional Food processing expertise with smart
          packaging and global logistics to deliver products that meet
          international market standards.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Expertise;
