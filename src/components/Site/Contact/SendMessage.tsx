// SendMessage.tsx

"use client";

import { SendIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  zoomIn,
  bounceIn,
} from "@/lib/animations";

const SendMessage: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="section-padding mt-[100px] sm:mt-[180px] flex justify-center items-center"
    >
      <div className="w-full sm:w-[584px] lg:w-[866px] flex flex-col items-center gap-[40px]">
        {/* Heading */}
        <motion.h2 variants={zoomIn} className="text-[24px] font-[600]">
          Send us a message
        </motion.h2>

        {/* Textarea */}
        <motion.textarea
          variants={fadeInUp}
          name=""
          placeholder="Type your message"
          id=""
          className="bg-[#F9F9F9] border border-[#F0F0F0] outline-none p-[20px] sm:p-[40px] rounded-[20px] w-full h-[400px] shadow-xl resize-none"
        ></motion.textarea>

        {/* Button */}
        <motion.button
          variants={bounceIn}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-[30px] sm:mt-[49px] cursor-pointer bg-[#15221B] py-[20px] px-[32px] text-white rounded-[4px] flex items-center gap-[10px] justify-center transition-transform duration-300 ease-in-out"
        >
          Send Message
          <SendIcon className="rotate-45 size-[18.93px]" />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default SendMessage;