// Welcome.tsx

"use client";

import { Smile, Stars, TreePalm, Users } from "lucide-react";
import React from "react";
import nigeria from "@/assets/svgs/nigeria.svg";
import uk from "@/assets/svgs/uk.svg";
import usa from "@/assets/svgs/usa.svg";
import { cn } from "@/lib/utils";
import WelcomeText from "../WelcomeText";
import { motion } from "framer-motion";
import { slideInLeft, fadeInUp, staggerContainer } from "@/lib/animations";

const countries = [
  {
    name: "Nigeria",
    shortName: "NG",
    logo: nigeria,
    className: "sm:mr-40",
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
    <div className="section-padding mt-40 relative space-y-10 overflow-hidden">
      <motion.div variants={slideInLeft} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <WelcomeText />
      </motion.div>

      <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <p className="bg-[#F9F9F9] rounded-lg p-5 text-start sm:p-0 sm:bg-background text-[16px] lg:text-[24px] sm:text-[18px] sm:text-center font-satoshi flex flex-col sm:block">
          <span>We are more than just a food processing and packaging company. </span> <br />{" "}
          <span>
            We are a bridge connecting the{" "}
            <strong>rich agricultural heritage of Africa</strong> with the world.{" "}
          </span>
          <br />{" "}
          <span>
            Specializing in producing and packaging premium, authentic African food
            products that speak to the heart and taste buds of our customers.
          </span>
        </p>
      </motion.div>

      <div className="space-y-5 mt-[40px] lg:mt-20">
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center sm:text-[16px] lg:text-[20px] text-[#929292]"
        >
          With Operations In:
        </motion.h1>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
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
              <img src={country.logo} alt="" className="size-[60px] sm:size-[37.06px] lg:size-auto" />
              <h1 className="hidden sm:block text-[18px] font-semibold text-center">
                {country.name}
              </h1>
              <h1 className="text-[18px] font-semibold text-center">
                {country.shortName}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
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
    </div>
  );
};

export default Welcome;