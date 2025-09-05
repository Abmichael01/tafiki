import Logo from "@/components/Others/Logo";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer} from "@/lib/animations";

export default function Promise() {
  return (
    <div className="section-padding section-spacing">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="flex gap-4 items-center justify-center text-[48px] text-[#5D5D5D] font-satoshi leading-none font-[950] mb-20"
      >
        <h1 className="">The</h1>
        <Logo noLink className="w-[150px]" />
        {"Promise"}
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-10 lg:h-[573px] items-center">
        <motion.img
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
          src="/landingMan.png"
          alt=""
          className=" h-[400px] lg:h-full w-auto rounded-xl shrink-0"
        />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
          className="h-full flex-1 bg-primary rounded-xl p-10 space-y-10 font-gilroy text-white flex flex-col justify-center"
        >
          <motion.p 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-[30px] font-[400] font-gilroy"
          >
            <span className="text-[#86BF4C]">Our recipe</span> is simple;
          </motion.p>
          <motion.ul 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="list-disc pl-8 space-y-4 text-[22px] font-[400]"
          >
            {[
              "Natural Ingredients",
              "Ethical Sourcing", 
              "Seamless Delivery",
              "AI-Powered Supply Chain",
              "Commitment to Freshness, Affordability, and Cultural Ease."
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <span className="text-white">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className=" text-[18px] mt-6"
          >
            <span className="italic">
              {" "}
              The <span className="text-[#86BF4C]">result?</span> A taste that
              feels like
            </span>{" "}
            <span className="text-[#86BF4C]">home.</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
