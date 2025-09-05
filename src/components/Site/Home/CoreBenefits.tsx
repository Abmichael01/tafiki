"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

const benefits = [
  {
    title: "🏠 No Warehousing Required",
    description:
      "We skip storage. Inventory moves directly from producer to point-of-sale.",
    color: "text-[#1E4109]",
    descriptionColor: "text-[#343434]",
    bulletColor: "bg-[#1E4109]",
  },
  {
    title: "💳 Zero Upfront for Retailers",
    description: "Shops stock on credit, pay only after making sales.",
    color: "text-[#AEAEAE]",
    descriptionColor: "text-[#AEAEAE]",
    bulletColor: "bg-[#AEAEAE]",
  },
  {
    title: "📈 Real-Time Inventory Sync with AI",
    description:
      "Smart matching of demand and supply to reduce overstock and waste.",
    color: "text-[#AEAEAE]",
    descriptionColor: "text-[#AEAEAE]",
    bulletColor: "bg-[#AEAEAE]",
  },
  {
    title: "🤝 Power to Small Businesses",
    description:
      "We eliminate MOQ barriers. Retailers access wholesale prices without bulk orders.",
    color: "text-[#AEAEAE]",
    descriptionColor: "text-[#AEAEAE]",
    bulletColor: "bg-[#AEAEAE]",
  },
];

export default function CoreBenefits() {
  return (
    <div className="section-spacing section-padding space-y-10">
      <h1 className="section-title">Core Benefits</h1>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left Column - Benefits */}
        <motion.div variants={slideInLeft} className="space-y-8">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className={`flex-shrink-0 w-3 h-3 ${benefit.bulletColor} rounded-full mt-2`}></div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold font-satoshi mb-2 ${benefit.color}`}
                  >
                    {benefit.title}
                  </h3>
                  <p className={`${benefit.descriptionColor} font-satoshi leading-relaxed`}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div variants={slideInRight} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/benefits.png"
              alt="Fresh produce delivery scene showing efficient logistics"
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Fallback to a placeholder if the image doesn't exist yet
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='18'%3EBenefits Image%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1E4109]/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
