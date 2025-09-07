import Logo from "@/components/Others/Logo";
import { motion } from "framer-motion";
import { fadeInUp, zoomIn } from "@/lib/animations";

export default function Tafiki() {
  return (
    <div className="flex flex-col items-center gap-1 section-padding section-spacing">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={zoomIn}
      >
        <Logo />
      </motion.div>
      <motion.h1 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className=" text-[35px] sm:text-[45px] lg:text-[65px] font-satoshi font-[700] text-[#AEAEAE] text-center leading-none "
      >
        isn't just feeding the world. We're feeding it right
      </motion.h1>
    </div>
  );
}
