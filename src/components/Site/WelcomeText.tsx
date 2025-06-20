import React from "react";
import RandomStars from "./RandomStars";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const WelcomeText: React.FC = () => {
  return (
    <div className="relative w-fit mx-auto text-center flex flex-col items-center gap-5">
      {/* Main heading */}
      <h1
        className="
          hidden sm:block sm:text-[64.58px] lg:text-[95.57px] tracking-tighter leading-tight font-extrabold 
          text-transparent bg-clip-text
          bg-gradient-to-b from-white  to-[#15221B]
        "
      >
        Smarter Food Distribution Starts Here
      </h1>

      {/* Mobile heading */}
      <h1
        className="
          sm:hidden flex flex-col text-[48px] tracking-tighter font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-b from-white  to-[#15221B]
        "
      >
        <span>Smarter Food</span>
        <span>Distribution</span>
        <span>Starts Here</span>
      </h1>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-[#F9F9F9] rounded-lg p-5 text-start sm:p-0 sm:bg-background text-[16px] lg:text-[24px] sm:text-[18px] sm:text-center font-satoshi flex flex-col sm:block space-y-4"
      >
        <p>
          We connect virtual distributors with retail shops in one seamless food
          logistics platform.
        </p>
        <p>
          Retail-ready food products — funded by virtual distributors, fulfilled
          by Hybrid, paid for only after sales.
        </p>{" "}
      </motion.div>

      <RandomStars />

      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeText;
