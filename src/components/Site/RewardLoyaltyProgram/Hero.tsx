// Hero.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import coins from "@/assets/images/coins.webp";
import { Link } from "react-router-dom";
import {
  fadeInUp,
  zoomIn,
  staggerContainer,
} from "@/lib/animations";

const Hero: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation after component mounts (avoids SSR issues)
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <motion.section
      initial="initial"
      animate={isAnimated ? "animate" : "initial"}
      variants={staggerContainer}
      className="section-padding pl-0 relative h-fit sm:h-[500px] lg:h-[709px] flex flex-col sm:flex-row sm:items-center gap-[50px] sm:gap-5 sm:justify-between justify-center"
    >
      {/* Text Content */}
      <div className=" relative z-[1] w-full sm:w-[60%] mt-[120px] sm:mt-0">
        <motion.h2 variants={zoomIn} className="text-[32px] lg:text-[48px] font-[600]">
          Rewards & Loyalty <br /> Program
        </motion.h2>
        <motion.h3
          variants={fadeInUp}
          className="text-[18px] sm:text-[24px] font-satoshi font-[500] text-[#252525] mt-[35px]"
        >
          Become a Partner and Earn with Our Distribution Program!
        </motion.h3>
        <motion.div variants={fadeInUp}>
          <Link
            to="/partner"
            className="px-5 py-2 rounded-full bg-primary text-[14px] sm:text-[16px] text-white mt-[45px] w-fit inline-block"
          >
            Become a partner
          </Link>
        </motion.div>
      </div>

      {/* Image Container */}
      <motion.div
        variants={{
          initial: { opacity: 0, x: 30 },
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
        className="relative self-center"
      >
        <img
          src={coins}
          alt=""
          className="w-[100%] h-[283.0px] sm:w-[303.65px] sm:h-[225.8px] lg:w-[527px] lg:h-[424px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;