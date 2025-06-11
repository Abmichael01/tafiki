// Welcome.tsx

"use client";

import { Smile, Stars, TreePalm, Users } from "lucide-react";
import React from "react";
import nigeria from "@/assets/svgs/nigeria.svg";
import uk from "@/assets/svgs/uk.svg";
import usa from "@/assets/svgs/usa.svg";
import family from "@/assets/images/family.webp";
import { cn } from "@/lib/utils";
import WelcomeText from "../WelcomeText";
import { motion } from "framer-motion";
import {
  slideInLeft,
  fadeInUp,
  staggerContainer,
  slideUp,
} from "@/lib/animations";

const countries = [
  {
    name: "Nigeria",
    shortName: "NG",
    logo: nigeria,
    className: " sm:mr-40",
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    logo: uk,
    className: "",
  },
  {
    name: "United States of America",
    shortName: "USA",
    logo: usa,
    className: "sm:ml-20",
  },
];

const stats = [
  {
    name: "Happy Clients",
    icon: <Smile />,
    value: "2000+",
  },
  {
    name: "Our Farms",
    icon: <TreePalm className="lg:size-[24px] sm:size-[20px]" />,
    value: "5",
  },
  {
    name: "Testimonies",
    icon: <Stars className="lg:size-[24px] sm:size-[20px]" />,
    value: "3000+",
  },
  {
    name: "Team Members",
    icon: <Users className="lg:size-[24px] sm:size-[20px]" />,
    value: "100+",
  },
];

const Welcome: React.FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="section-padding relative mt-[100px] sm:mt-0 space-y-10 overflow-hidden"
    >
      {/* Welcome Text */}
      <motion.div
        variants={slideInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <WelcomeText />
      </motion.div>

      {/* Intro Paragraph */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <p className="rounded-lg sm:p-0 sm:bg-background text-[16px] lg:text-[24px] sm:text-[18px] text-center font-satoshi flex flex-col sm:block">
          <span>
            We are more than just a food processing and packaging company.{" "}
          </span>
        </p>
      </motion.div>

      {/* Family Image Section */}
      <motion.div
        variants={slideUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-[60px] rounded-[24px] overflow-hidden relative h-[449px] sm:h-[385.85px] lg:h-[648px]"
      >
        <img src={family} alt="" className="w-full h-full object-cover" />

        <motion.h2
          variants={slideUp}
          className="text-[16px] sm:text-[20px] font-[600] text-white absolute left-[10px] sm:left-[38px] top-[30px] lg:left-[78px] lg:top-[60px] w-[80%] sm:w-[70%]"
        >
          We are a bridge connecting the rich agricultural heritage of Africa
          with the world.
        </motion.h2>

        <motion.h2
          variants={slideUp}
          className="text-[14px] lg:text-[20px] font-[600] text-white absolute right-[10px] sm:right-[38px] bottom-[30px] lg:right-[78px] lg:bottom-[60px] w-[80%] sm:w-[60%] text-end z-[1]"
        >
          We specialize in producing and packaging premium, authentic African
          food products that speak to the heart and taste buds of our customers.
        </motion.h2>

        <div className="bg-black blur-2xl w-full h-[50%] absolute right-[-50px] bottom-[-50px] opacity-[0.7] rounded-full"></div>
      </motion.div>

      {/* Countries Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-5 mt-[80px] lg:mt-[150px]"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-center sm:text-[16px] lg:text-[20px] text-[#929292]"
        >
          We operate in:
        </motion.h1>

        <motion.div
          variants={staggerContainer}
          className="flex sm:justify-center justify-between"
        >
          {countries.map((country, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={cn(
                "flex flex-col justify-between items-center gap-5",
                country.className
              )}
            >
              <img
                src={country.logo}
                alt=""
                className="size-[60px] sm:size-[37.06px] lg:size-auto"
              />
              <h1 className="hidden sm:block text-[18px] font-semibold text-center">
                {country.name}
              </h1>
              <h1 className="text-[18px] font-semibold text-center">
                {country.shortName}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-[20px] mt-[60px] lg:mt-[120px]"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-center sm:text-[16px] lg:text-[20px] text-[#929292] hidden ld:block"
        >
          So far...
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 gap-y-[40px] sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="space-y-2 border-l-2 pl-[20px] border-[#911B13]"
            >
              {stat.icon}
              <p className="sm:text-[14px] lg:text-[18px]">{stat.name}</p>
              <h1 className="text-[#15221B] sm:text-[24px] lg:text-[40px] font-semibold">
                {stat.value}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;