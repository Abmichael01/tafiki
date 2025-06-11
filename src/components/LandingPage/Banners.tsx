import React from "react";
import { motion } from "framer-motion";
import riceBanner from "@/assets/images/riceBanner.webp";
import beansBanner from "@/assets/images/beansBanner.webp";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Banners: React.FC = () => {
  return (
    <motion.div
      className="section-padding mt-20 flex flex-col items-center w-full sm:grid grid-cols-1 sm:grid-cols-2 gap-[50px]"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div variants={fadeInUp} className="flex justify-center ">
        <img
          src={riceBanner}
          alt="rice-banner"
          className="rounded-[10px] sm:rounded-[14px] lg:rounded-[20px]  w-[80%] min-[450px]:size-[400px] sm:size-[300px] lg:size-[400px] overflow-hidden"
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="flex justify-center ">
        <img
          src={beansBanner}
          alt="beans-banner"
          className="rounded-[10px] sm:rounded-[14px] lg:rounded-[20px]  w-[80%] min-[450px]:size-[400px] sm:size-[300px] lg:size-[400px] overflow-hidden"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banners;
