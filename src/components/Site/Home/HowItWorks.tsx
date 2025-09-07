import Logo from "@/components/Others/Logo";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, } from "@/lib/animations";

const steps = [
  {
    number: 1,
    title: "Fund Food Products Virtually",
    description:
      "Entrepreneurs sponsor inventory for shops without handling any goods.",
  },
  {
    number: 2,
    title: "Tafiki Fulfils Orders",
    description:
      "Products go directly from processors to partnered retail shops.",
  },
  {
    number: 3,
    title: "Retailers Sell First, Pay Later",
    description:
      "Shops receive stock with no upfront payment and Tafiki collects after sales.",
  },
];

export default function HowItWorks() {
  return (
    <div className="section-padding section-spacing">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="flex gap-4 items-center justify-center text-[30px] sm:text-[48px] text-[#5D5D5D] font-satoshi leading-none font-[950] mb-20"
      >
        <h1 className="">How</h1>
        <Logo noLink className="w-[100px] sm:w-[150px] shrink-0" />
        {"Works"}
      </motion.div>

      <div className="flex flex-col gap-10 sm:gap-20 md:gap-30 lg:gap-49 font-satoshi  mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            className={`
              relative
              w-full
              max-w-[95vw]
              md:max-w-[500px]
              lg:max-w-[600px]
              ${index === 1 ? "self-end" : "self-start"}
            `}
          >
            {/* Decorative lines */}
            {index === 0 && (
              <img
                src="/htwLine1.svg"
                alt=""
                className="absolute top-full left-1/2 hidden md:block w-[320px]  lg:w-auto "
              />
            )}
            {index === 2 && (
              <img
                src="/htwLine2.svg"
                alt=""
                className="absolute bottom-full left-1/2 hidden md:block w-[320px]  lg:w-auto "
              />
            )}

            <div className="bg-white rounded-lg p-8 shadow-2xl border border-gray-100 flex items-start gap-6 min-h-[100px] relative z-[1]">
              <div className="bg-[#86BF4C] text-white w-12 min-h-[100px] rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
