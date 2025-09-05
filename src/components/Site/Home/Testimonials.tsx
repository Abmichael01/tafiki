// Testimonials.tsx

"use client";

import React, { useState } from "react";
import testimonials1Img from "@/assets/images/testimonial1.webp";
import testimonials2Img from "@/assets/images/testimonial2.webp";
import testimonials3Img from "@/assets/images/testimonial3.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import Logo from "@/components/Others/Logo";

const testimonials = [
  {
    name: "Damilola O.",
    profession: "Restaurant Owner",
    testimonial:
      "“FoodHybrid has completely transformed the way I source fresh produce. The ordering process is seamless, and the quality of the products is always top-notch!”",
    img: testimonials1Img,
  },
  {
    name: "Chinedu M.",
    profession: "Catering Business Owner",
    testimonial:
      "“I love how FoodHybrid ensures timely deliveries. My business relies on fresh ingredients, and they never disappoint. Highly recommended!”",
    img: testimonials2Img,
  },
  {
    name: "Miriam K.",
    profession: "Food Supplier",
    testimonial:
      "“I’ve been using FoodHybrid for months, and they’ve never let me down. Reliable service, quality products, and secure transactions all in one place!”",
    img: testimonials3Img,
  },
  {
    name: "Damilola O.",
    profession: "Restaurant Owner",
    testimonial:
      "“FoodHybrid has completely transformed the way I source fresh produce. The ordering process is seamless, and the quality of the products is always top-notch!”",
    img: testimonials1Img,
  },
  {
    name: "Chinedu M.",
    profession: "Catering Business Owner",
    testimonial:
      "“I love how FoodHybrid ensures timely deliveries. My business relies on fresh ingredients, and they never disappoint. Highly recommended!”",
    img: testimonials2Img,
  },
  {
    name: "Miriam K.",
    profession: "Food Supplier",
    testimonial:
      "“I’ve been using FoodHybrid for months, and they’ve never let me down. Reliable service, quality products, and secure transactions all in one place!”",
    img: testimonials3Img,
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="section-padding section-spacing"
    >
      <div className="">
        <motion.h2 variants={fadeInUp} className="section-title">
          <div className="flex gap-4 items-center justify-center text-[28px] sm:text-[32px] lg:text-[48px] text-[#5D5D5D] font-satoshi leading-none font-[950] mb-8">
            <h1 className="">Take It From Other</h1>
            <Logo noLink className="w-[150px]" />
            {"Users"}
          </div>
        </motion.h2>

        {/* Desktop Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          className="hidden sm:flex gap-[33.59px] overflow-x-auto py-10 px-5 testimonials-container"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="sm:w-[247.3px] lg:w-[415.3px] p-[13.44px] shadow-xl rounded-xl shrink-0 space-y-[13.44px] testimonial-container"
            >
              <div className="space-y-[7.78px]">
                <div className="size-[60px] rounded-full bg-primary">
                  <img
                    src={testimonial.img}
                    alt=""
                    className="size-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="sm:text-[16px] lg:text-[20px] font-medium">
                    {testimonial.name}
                  </h1>
                  <h2 className="sm:text-[12px]">{testimonial.profession}</h2>
                </div>
              </div>
              <p className="sm:text-[10.42px] lg:text-[18px] font-satoshi italic">
                {testimonial.testimonial}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Testimonial Slider */}
        <div>
          <motion.div
            key={index}
            variants={index > 0 ? slideInRight : slideInLeft}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "tween" }}
            className="w-full p-[13.44px] sm:hidden shadow-xl rounded-xl shrink-0 space-y-[13.44px] testimonial-container"
          >
            <div className="space-y-[7.78px]">
              <div className="size-[60px] rounded-full bg-primary">
                <img
                  src={testimonials[index].img}
                  alt=""
                  className="size-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="sm:text-[16px] lg:text-[20px] font-medium">
                  {testimonials[index].name}
                </h1>
                <h2 className="sm:text-[12px]">
                  {testimonials[index].profession}
                </h2>
              </div>
            </div>
            <p className="sm:text-[10.42px] lg:text-[18px] font-satoshi italic">
              {testimonials[index].testimonial}
            </p>
          </motion.div>
        </div>

        {/* Mobile Pagination & Arrows */}
        <div className="flex justify-between sm:hidden items-center">
          <div
            onClick={() => {
              if (index > 0) setIndex(index - 1);
            }}
            className={cn(
              "p-[3px] text-[12px] text-[#15221B] border-2 rounded-full border-[#15221B] cursor-pointer transition-all",
              index === 0 && "border-[#15221B]/20 text-[#15221B]/20"
            )}
          >
            <ArrowLeft />
          </div>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "size-2 rounded-full bg-[#15221B]/20 transition-all duration-500",
                  idx === index && "bg-[#15221B] w-5"
                )}
              ></div>
            ))}
          </div>
          <div
            onClick={() => {
              if (index < testimonials.length - 1) setIndex(index + 1);
            }}
            className={cn(
              "p-[3px] text-[12px] text-[#15221B] border-2 rounded-full border-[#15221B] cursor-pointer transition-all",
              index === testimonials.length - 1 &&
                "border-[#15221B]/20 text-[#15221B]/20"
            )}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
