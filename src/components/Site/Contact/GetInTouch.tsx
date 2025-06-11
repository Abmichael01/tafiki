// GetInTouch.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import rice from "@/assets/images/rice.webp";
import beans from "@/assets/images/beans.webp";
import { slideUpAndFade, staggerContainer } from "@/lib/animations";

const GetInTouch: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="section-padding mt-[120px] space-y-[100px] sm:space-y-[150px]"
    >
      {/* Title Section */}
      <motion.div variants={slideUpAndFade} className="text-center w-full">
        <h2 className="about-us-text bg-clip-text text-transparent font-[700]">
          CONTACT
        </h2>
        <h2 className=" text-[45px] sm:text-[36px] lg:text-[55px] font-[600]">
          Get in Touch with Us
        </h2>
      </motion.div>

      {/* Contact Info + Background Images */}
      <motion.div
        variants={staggerContainer}
        className="flex flex-col gap-[20px] sm:gap-[40px] items-center relative w-full"
      >
        {/* Background Images */}
        <motion.img
          variants={slideUpAndFade}
          src={rice}
          alt=""
          className="w-[120px] h-[150px] sm:w-[166.2px] sm:h-[246.14px] lg:w-[432px] lg:h-[520.7px] absolute left-[-50px] sm:left-[-80px] lg:left-[-200px]"
        />
        <motion.img
          variants={slideUpAndFade}
          src={beans}
          alt=""
          className="w-[120px] h-[150px] sm:w-[166.2px] sm:h-[246.14px] lg:w-[432px] lg:h-[520.7px] absolute right-[-50px] sm:right-[-80px] lg:right-[-200px]"
        />

        {/* Phone */}
        <motion.div
          variants={slideUpAndFade}
          className="flex flex-col sm:flex-row items-center gap-2"
        >
          <MdPhone className="size-[30.71px] sm:size-[44.29px]" />
          <h2 className="font-satoshi items-center text-[20px] sm:text-[24px] lg:text-[28px] flex flex-col sm:flex-row">
            <span>1800-121-3637, </span>{" "} <span> +91-7052-101-786</span>
          </h2>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={slideUpAndFade}
          className="flex flex-col sm:flex-row items-center gap-2"
        >
          <IoIosMail className="size-[30.71px] sm:size-[44.29px]" />
          <h2 className="text-nowrap font-satoshi text-[20px] sm:text-[24px] lg:text-[28px]">
            info@foodhybrid.co.uk
          </h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex gap-[40px] items-center"
        >
          <motion.div
            variants={slideUpAndFade}
            className="size-[40px] lg:size-[60px] bg-[#25252566] flex items-center justify-center rounded-full"
          >
            <FaFacebook className="size-[25px] lg:size-[45px] text-white" />
          </motion.div>
          <motion.div
            variants={slideUpAndFade}
            className="size-[40px] lg:size-[60px] bg-[#25252566] flex items-center justify-center rounded-full"
          >
            <FaInstagram className="size-[25px] lg:size-[45px] text-white" />
          </motion.div>
          <motion.div
            variants={slideUpAndFade}
            className="size-[40px] lg:size-[60px] bg-[#25252566] flex items-center justify-center rounded-full"
          >
            <FaXTwitter className="size-[25px] lg:size-[45px] text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default GetInTouch;