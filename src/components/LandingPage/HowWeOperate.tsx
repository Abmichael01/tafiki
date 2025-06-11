import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import partLogo from "@/assets/images/partLogo.webp";
import { cn } from "@/lib/utils";
import { slideInLeft, staggerContainer } from "@/lib/animations";

const hows = [
  "We adhere to global best manufacturing practices, ensuring every step of our process meets the highest standards in food safety and hygiene.",
  "Our facilities boast certifications from the FDA, NAFDAC, and other international regulatory bodies, reflecting our dedication to maintaining rigorous quality control and compliance with international food safety standards.",
  "Allergy awareness is a core aspect of our production, and we strictly follow protocols to prevent cross-contamination. Our team is fully trained to adhere to HACCP (Hazard Analysis and Critical Control Points) practices, ensuring the highest levels of food safety management.",
];

interface Props {
  title?: boolean;
}

const HowWeOperate: React.FC<Props> = ({ title }) => {
  return (
    <div className="bg-[#15221B] section-padding py-20 w-full mt-20 text-white space-y-[60px]">
      {title && (
        <h1 className="text-center text-[18px] sm:text-[24px] font-semibold lg:text-[32px]">
          How We Operate
        </h1>
      )}

      <div className="flex items-center justify-between">
        <img
          src={partLogo}
          alt=""
          className="hidden sm:block sm:w-[381px] sm:h-[139px] lg:w-[538px] lg:h-[328.7px] object-contain"
        />

        <motion.div
          className="w-full sm:w-1/2 space-y-[40px]"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          {hows.map((how, index) => (
            <motion.div
              key={index}
              className="space-y-[12px]"
              variants={slideInLeft}
            >
              <CheckCircle2 className={cn(title && "fill-white text-[#15221B]")} />
              <p className="leading-[28px] text-[16px] sm:text-[18px]">{how}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeOperate;
