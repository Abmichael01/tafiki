// OurTaste.tsx

"use client";

import React from "react";
import rice from "@/assets/images/rice.webp";
import beans from "@/assets/images/beans.webp";
import yamFlour from "@/assets/images/yamFlour.webp";
import riceFlour from "@/assets/images/riceFlour.webp";
import plantainFlour from "@/assets/images/plantainFlour.webp";
import garri from "@/assets/images/garri.webp";
import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  fadeInUp,
} from "@/lib/animations";

const tastes = [
  {
    name: "Rice",
    description:
      "Simplify kitchen prep with our Peeled Beans. A convenient, time-saving solution for your favorite dishes. Hand-peeled to preserve natural flavor and texture, they’re perfect for moin-moin, akara, or any traditional recipe, without the peeling hassle.",
    img: rice,
  },
  {
    name: "Peeled Beans",
    description:
      "Simplify kitchen prep with our Peeled Beans. A convenient, time-saving solution for your favorite dishes. Hand-peeled to preserve natural flavor and texture, they’re perfect for moin-moin, akara, or any traditional recipe, without the peeling hassle.",
    img: beans,
  },
  {
    name: "Yam Flour",
    description:
      "Turn mealtime into a celebration with our premium Yam Flour, the heart of the perfect amala. Made from 100% finely processed yams, it’s light, fluffy, and rich in taste. Whether paired with soups or stews, our Yam Flour guarantees a smooth and satisfying experience.",
    img: yamFlour,
  },
  {
    name: "Rice Flour",
    description:
      "Experience the versatility of our finely milled Rice Flour, perfect for a variety of culinary delights. Made from high-quality rice grains, it serves as an excellent gluten-free alternative for baking, thickening soups, or preparing traditional African dishes like tuwo shinkafa. Its light texture and mild flavor make it an essential addition to your pantry.",
    img: riceFlour,
  },
  {
    name: "Plantain Flour",
    description:
      "Discover the wholesome goodness of our Plantain Flour, made from 100% unripe plantains. Gluten-free and rich in fiber, it’s ideal for those seeking a healthy alternative. Perfect for making swallow or pancakes, it delivers a distinct flavor that brings versatility and nutrition to your meals.",
    img: plantainFlour,
  },
  {
    name: "Garri",
    description:
      "Our Garri, made from finely processed cassava roots, strikes the perfect balance of crunch and smoothness. Enjoy it as a refreshing drink or as eba, a quick, nutritious meal that delivers comfort in every bite.",
    img: garri,
  },
];

const OurTaste: React.FC = () => {
  return (
    <section className="section-padding mt-40">
      {/* Heading Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="text-center mb-4"
      >
        <h1 className="section-title">Our Products</h1>
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-4 text-center leading-7 text-base flex flex-col gap-6 text-[#0C0C0C]"
      >
        Crafted with precision, sourced with integrity and processed from HACCP
        certified facilities and every product is crafted with care, blending
        the richness of African tradition with modern food processing techniques
        to deliver authentic flavors that satisfy your cravings.
      </motion.div>

      {/* Taste Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-x-20 lg:gap-y-10 mt-16 px-4 lg:px-10">
        {tastes.map((taste, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            className="flex flex-col items-center space-y-6 bg-[#F9F9F9] rounded-xl p-8"
          >
            <img
              src={taste.img}
              alt={taste.name}
              className="h-40 sm:h-32 lg:w-48 lg:h-56 object-contain"
            />
            <div className="text-start">
              <h2 className="text-lg font-semibold">{taste.name}</h2>
              <p className="mt-2 text-sm leading-6 font-satoshi text-muted-foreground">
                {taste.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTaste;
