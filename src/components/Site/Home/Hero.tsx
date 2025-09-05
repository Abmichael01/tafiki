import { IoGlobeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, zoomIn } from "@/lib/animations";

const statistics = [
  { number: "100+", label: "Orders Delivered" },
  { number: "3000+", label: "Virtual Distributors" },
  { number: "2000+", label: "Retail Shops" },
  { number: "5+", label: "Vendors" }
]

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full gap-[30px] min-h-[700px]">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInLeft}
        className=" section-padding-left max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] relative z-[1] mt-40"
      >
        <motion.h1 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="font-gilroy text-[40px] md:text-[60px] font-[400] leading-none"
        >
          Smarter Food Logistics
        </motion.h1>
        <motion.p 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-[16px] md:text-[18px] font-[400] text-[#5D5D5D] leading-[24px] mt-[20px]"
        >
          Reimagining how food moves, empowering smarter distribution, enriching
          local communities, and bringing Africa's rich food legacy to the
          world.
        </motion.p>
        <motion.button 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={zoomIn}
          className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-white mt-[40px]"
        >
          <span>Get Started</span>
          <IoGlobeOutline />
        </motion.button>
        
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-16 font-satoshi"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-[#5D5D5D] text-sm mb-4"
          >
            With over:
          </motion.p>
          <div className="grid grid-cols-4 gap-4">
            {statistics.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                custom={index}
                className="text-start"
              >
                <h3 className="text-[24px] font-bold text-[#86BF4C] ">{stat.number}</h3>
                <p className="text-[#5D5D5D] text-xs font-[500]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.img
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInRight}
        src="/landinghero.png"
        alt="hero"
        loading="lazy"
        className="lg:h-[700px] object-cover absolute lg:relative top-0 right-0 min-[200px]:size-[150px] min-[300px]:size-[200px] min-[400px]:size-[250px] sm:size-[300px] md:size-[400px] rounded-bl-full lg:rounded-bl-none lg:w-auto"
      />
      {/* <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[white] to-transparent " /> */}
    </div>
  );
}
