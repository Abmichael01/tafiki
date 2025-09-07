import Mission from "@/components/LandingPage/Mission";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, zoomIn } from "@/lib/animations";

export default function AtTafiki() {
  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className=" section-spacing space-y-10 bg-primary py-20 rounded-t-[60px] text-white"
    >
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="section-padding space-y-5 text-center font-gilroy font-[400] relative"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-[22px]"
        >
          At Tafiki, We believe food is{" "}
          <span className="text-[#86BF4C]">more</span> than sustenance
        </motion.h1>
        <motion.img 
          variants={zoomIn}
          src="/about/family.png" 
          alt="" 
          className="rounded-[40px] w-full" 
        />
        <motion.h1 
          variants={fadeInUp}
          className="text-[22px]"
        >
          It's a bridge to culture, memory, and{" "}
          <span className="text-[#86BF4C]">home</span>{" "}
        </motion.h1>
      </motion.div>
      <motion.div 
        variants={slideInRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex justify-end"
      >
        <img
          src="/about/svg1.svg"
          alt=""
          //   className="translate-x-[80px]"
        />
      </motion.div>
      <motion.h1 
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=" text-[22px] sm:text-[32px] lg:text-[32px] text-white/50 font-satoshi section-padding text-justify"
      >
        Rooted in the richness of{" "}
        <span className="text-white">African tradition</span>, we're building a{" "}
        <span className="text-white">modern food logistics platform</span> that
        connects{" "}
        <span className="text-white">producers, virtual distributors</span>, and{" "}
        <span className="text-white">retailers</span> in a{" "}
        <span className="text-white">seamless, tech-powered</span> supply chain
      </motion.h1>
      <Mission about />
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center section-padding space-y-8"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-[22px] font-gilroy font-[600]"
        >
          {" "}
          <span className="text-[#86BF4C]">Smarter</span> Food Distribution
          Starts Here
        </motion.h1>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.img
            variants={slideInLeft}
            src="/about/svg2.svg"
            alt=""
            className="absolute top-[-60px] left-[-80px] "
          />
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-[#193607] p-10 relative rounded-xl flex flex-col-reverse lg:flex-row gap-10 lg:h-[450px] items-center"
          >
            <motion.div 
              variants={slideInLeft}
              className="text-left text-white font-satoshi text-[18px] space-y-6 relative z-[9]"
            >
              <p>
                Tafiki uses a Next-Gen consignment model where Virtual
                Distributors sponsor products and stock, and Tafiki fulfills and
                delivers them to retail shops who only pay for them after they
                are sold within a specified period of time. This means:
              </p>
              <motion.ul 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="list-disc pl-6 space-y-3"
              >
                {[
                  "No warehouse stress",
                  "No upfront inventory cost",
                  "Risk-free access to high-quality African food products",
                  "Full control over retail-ready distribution"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={fadeInUp}
                    custom={index}
                  >
                    <span className="font-[700]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.img
              variants={slideInRight}
              src="/about/tafiki.png"
              alt=""
              className=" h-[350px] lg:h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
