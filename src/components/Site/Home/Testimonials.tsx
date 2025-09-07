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
  // Virtual Distributors
  {
    name: "Adebola O.",
    profession: "Virtual Distributor",
    location: "Texas, USA",
    testimonial:
      "Tafiki makes food distribution seamless—no warehouses, no heavy costs. Just pure growth at my fingertips.",
    img: testimonials1Img,
  },
  {
    name: "Kwame A.",
    profession: "Virtual Distributor",
    location: "Accra, Ghana",
    testimonial:
      "I expanded into three new regions in under 6 months thanks to Tafiki's digital distribution model.",
    img: testimonials2Img,
  },
  {
    name: "Maria L.",
    profession: "Virtual Distributor",
    location: "Houston, USA",
    testimonial:
      "The platform lets me scale like a big player without the upfront capital—Tafiki is a true game-changer.",
    img: testimonials3Img,
  },
  // Retailers
  {
    name: "Chinedu E.",
    profession: "Retailer",
    location: "Abuja, Nigeria",
    testimonial:
      "With Tafiki, I stock fresh products without tying up cash in bulky inventory. Risk is zero, margins are better.",
    img: testimonials1Img,
  },
  {
    name: "Sarah B.",
    profession: "Grocery Owner",
    location: "London, UK",
    testimonial:
      "I've cut supply delays by half—Tafiki connects me directly to reliable suppliers on demand.",
    img: testimonials2Img,
  },
  {
    name: "David R.",
    profession: "Retailer",
    location: "New York, USA",
    testimonial:
      "My store shelves are always full and my customers keep coming back. Tafiki keeps me competitive.",
    img: testimonials3Img,
  },
  // Vendors (Suppliers)
  {
    name: "Kofi M.",
    profession: "Food Supplier",
    location: "Kumasi, Ghana",
    testimonial:
      "Tafiki opened doors to retailers I could never reach on my own. Sales doubled within months.",
    img: testimonials1Img,
  },
  {
    name: "Ngozi I.",
    profession: "Farmer & Vendor",
    location: "Enugu, Nigeria",
    testimonial:
      "Instead of worrying about logistics, I focus on production—Tafiki handles the rest.",
    img: testimonials2Img,
  },
  {
    name: "Olaoluwa G.",
    profession: "Vendor",
    location: "Iseyin, Nigeria",
    testimonial:
      "The consignment model means I only grow when my partners grow. It's fair and sustainable.",
    img: testimonials3Img,
  },
  {
    name: "Olu A.",
    profession: "Export Vendor",
    location: "Lagos, Nigeria",
    testimonial:
      "Tafiki gave my products visibility in the U.S. market without the massive marketing spend.",
    img: testimonials1Img,
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
          <div className=" max-sm:flex-col flex gap-4 items-center justify-center text-[28px] sm:text-[32px] lg:text-[48px] text-[#5D5D5D] font-satoshi leading-none font-[950] mb-8">
            <h1 className="">Take It From Other</h1>
            <Logo noLink className="w-[100px] md:w-[120px] lg:w-[150px]" />
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
                  <h3 className="sm:text-[10px] text-gray-600">{testimonial.location}</h3>
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
                <h3 className="sm:text-[10px] text-gray-600">
                  {testimonials[index].location}
                </h3>
              </div>
            </div>
            <p className="sm:text-[10.42px] lg:text-[18px] font-satoshi italic">
              {testimonials[index].testimonial}
            </p>
          </motion.div>
        </div>

        {/* Mobile Pagination & Arrows */}
        <div className="flex justify-between sm:hidden items-center mt-10">
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