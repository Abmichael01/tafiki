import React from "react";
import { motion } from "framer-motion";
import { TiMail } from "react-icons/ti";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { slideUpAndFade, staggerContainer } from "@/lib/animations";
import { MdOutlinePhone } from "react-icons/md";

const GetInTouch: React.FC = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="section-padding mt-50 space-y-[40px]"
    >
      {/* Title Section */}
      <motion.div variants={slideUpAndFade} className="text-center w-full">
        <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#252525]">
          Get in Touch with Us
        </h2>
      </motion.div>

      {/* Contact Info Box */}
      <motion.div
        variants={slideUpAndFade}
        className="relative max-w-2xl mx-auto"
      >
        {/* Main Contact Box */}
        <div className="relative bg-primary rounded-2xl p-8 sm:p-12 text-white overflow-hidden">
          <img src="/about/capa.svg" alt="" className="absolute bottom-0 left-0" />
          <img src="/about/capa2.svg" alt="" className="absolute top-0 right-0" />
          {/* Content */}
          <div className="relative z-10 space-y-8 flex flex-col gap-4 items-center">
            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <MdOutlinePhone className="text-4xl text-white" />
              <div className="font-satoshi text-lg sm:text-xl">
                <span>+14705837872</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <TiMail className="text-4xl text-white" />
              <div className="font-satoshi text-lg sm:text-xl">
                <span>info@tafiki.co.uk</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 pt-4">
              <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
                <FaFacebookF className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
                <FaInstagram className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer">
                <FaXTwitter className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GetInTouch;