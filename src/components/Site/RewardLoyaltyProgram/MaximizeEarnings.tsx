// MaximizeEarnings.tsx

"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import StarField from "./StarField";
import { fadeInUp } from "@/lib/animations";

const steps = [
  {
    title: "Tiered Cash Back: More Sales, More Rewards",
    description:
      "Our simple cashback system ensures your earnings grow with every sale, the more you sell, the more you earn.",
    details: [
      "Base Tier: Hit a minimum target of 1000 units per quarter and earn 2% cash back on your sales.",
      "Growth Tier: Reach 2000 units per quarter and boost your reward to 5% cash back.",
      "Top Tier: Exceed 5,000 units per quarter and enjoy up to 10% cash back.",
    ],
  },
  {
    title: "Early Payment Incentives: Save More, Sooner",
    description:
      "At Food Hybrid (UK) Limited, we value punctuality. Pay for your orders within 15 days and receive an additional 2% cash back. This not only rewards your commitment but also helps you save more while keeping your cash flow healthy.",
    details: [],
  },
  {
    title: "Referral Incentives: Grow Our Network, Grow Your Rewards",
    description:
      "Know someone who would make a great distributor or partner? Refer them to us, and you'll receive a one-time product or cash bonus when they join.",
    details: [
      "Help us grow the Food Hybrid (UK) Limited family and get rewarded for it!",
    ],
  },
  {
    title: "Recognition and Annual Awards: Celebrating Your Success",
    description:
      "We believe in recognizing and celebrating your hard work. Your success is our success, and we want to celebrate it. Our top distributors will be:",
    details: [
      "Featured in our Company's communications, from Newsletters to Social Media.",
      "Invited to an exclusive annual awards ceremony, where you'll receive prestigious gifts and recognition.",
      "Given the opportunity to join our Distributor Advisory Board, giving you a direct role in shaping the future of Food Hybrid (UK) Limited.",
    ],
  },
  {
    title: "Local Business Partnerships: Enjoy Exclusive Perks",
    description:
      "These rewards are designed to support your personal and professional life as you reach new sales milestones. Through partnerships with local businesses, we offer additional rewards beyond cash. These include:",
    details: [
      "Discounted hotel stays for your leisure or business trips.",
      "Dining experiences at top restaurants.",
    ],
  },
  {
    title: "Co-Marketing Support: Building Your Brand Together",
    description:
      "As a top-performing distributor, you’ll also benefit from our co-marketing support. We'll work with you to boost your visibility with local advertising, digital campaigns, and branded promotional materials to help you grow your business.",
    details: [],
  },
];

interface Props {
  dashboard?: boolean
}

const MaximizeEarnings: React.FC<Props> = ({ dashboard = false }) => {
  return (
    <div className={cn(
      "space-y-[40px] ",
      dashboard ? "mt-[200px]" : "section-padding section-spacing"
    )}>
      <h1 className="text-[18px] lg:text-[22px] font-[500] font-satoshi">
        Explore how to maximize your earnings with cashback, bonuses, and
        exclusive perks;
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className={cn(
              "border border-[#15221B33] rounded-[24px] p-[40px] space-y-[20px] relative bg-gradient-to-br lg:bg-none from-[#54886C] via-[#2C4839] to-[#15221B] text-white ",
              index === 2 || index === 5 ? "sm:col-span-2 text-center" : ""
            )}
          >
            <StarField />
            <h2 className="text-[18px] sm:text-[20px] font-[600] lg:text-[#15221B] pl-[10px]">
              {" "}
              {index + 1}. {step.title}
            </h2>
            <div className="space-y-[20px] text-[15px] sm:text-[17px] lg:text-[#252525]">
              <p>{step.description}</p>
              {step.details &&
                step.details.map((detail, idx) => (
                  <p key={idx} className="">
                    - {detail}
                  </p>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MaximizeEarnings;