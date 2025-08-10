import React from "react";
import heroBgImage from "@/assets/images/wheatField.webp";
import { Button } from "../ui/button";
import { Globe, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import StackedProducts from "./StackedProducts";
import Logo from "../Others/Logo";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Hero: React.FC = () => {
  return (
    <div className="px-0 sm:px-10 relative">
      <div className="overflow-hidden section-padding sm:rounded-[60px] relative h-[700px] pb-20 w-full bg-black">
        <img
          src={heroBgImage}
          alt="hero-background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="w-full absolute top-10 flex sm:hidden sm:justify-center">
          <Logo className="relative z-[2]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full h-full relative z-10 flex gap-[60px] justify-center sm:items-center flex-col"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-white text-[36px] sm:max-w-[80%] text-start sm:text-center font-semibold"
          >
            Bridging Africa's Rich Agricultural Heritage with the World
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="flex gap-5 sm:gap-[62px]"
          >
            <Link to="/home">
              <Button className="sm:px-14 px-5 bg-[#15221B] hover:bg-[#15221B]/90">
                <div className="flex gap-2 items-center">
                  Visit Our website
                  <Globe />
                </div>
              </Button>
            </Link>
            <Link to="/partner">
              <Button className="sm:px-14 px-5 bg-[#15221B] hover:bg-[#15221B]/90">
                <div className="flex gap-2 items-center">
                  Go to shop
                  <ShoppingCart />
                </div>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <StackedProducts
        type="rice"
        className="absolute left-[3%] sm:left-[10%]"
      />
      <StackedProducts
        type="beans"
        className="absolute right-[3%] sm:right-[10%]"
      />
    </div>
  );
};

export default Hero;
