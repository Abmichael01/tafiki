import React from "react";
import heroImg from "@/assets/images/wheatField.webp";
import Motto from "@/components/Others/Motto";
import { Button } from "@/components/ui/button";
import StackedProducts from "@/components/LandingPage/StackedProducts";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, bounceIn, fadeIn } from "@/lib/animations";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="section-padding relative h-[600px] sm:h-[780px] flex flex-col gap-5 justify-center">
      <img
        src={heroImg}
        alt="hero-image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Text and Button Animation */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-[28px] relative z-10 text-left px-4"
      >
        <motion.h1 variants={fadeInUp}>
          <Motto
            sizes={["text-[48px] sm:text-[64px]", "text-[24px] sm:text-[36px]"]}
          />
        </motion.h1>

        <motion.div variants={bounceIn}>
          <Link to="/partner/register?stage=1">
            <Button className="py-[12px] px-[20px]">Get Started</Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Product Images */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }} // Optional delay for visual rhythm
      >
        <StackedProducts
          type="rice"
          className="absolute left-[2%] sm:left-[40px] lg:left-[100px]"
        />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }} // Slight delay to create a stagger effect
        className="z-[99]"
      >
        <StackedProducts
          type="beans"
          className="absolute right-[2%] sm:right-[40px] lg:right-[100px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
