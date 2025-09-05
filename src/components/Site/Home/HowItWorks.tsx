import Logo from "@/components/Others/Logo";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, zoomIn } from "@/lib/animations";

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
        className="flex gap-4 items-center justify-center text-[48px] text-[#5D5D5D] font-satoshi leading-none font-[950] mb-20"
      >
        <h1 className="">How</h1>
        <Logo noLink className="w-[150px]" />
        {"Works"}
      </motion.div>

      <div className="space-y-50 font-satoshi">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            className={`flex items-center gap-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } min-h-[100px]`}
          >
            <div className="flex-1 h-full relative">
              <div className="bg-white rounded-lg p-8 shadow-2xl border border-gray-100 h-full min-h-[100px]">
                {index === 0 && (
                  <img
                    src="/htwLine1.svg"
                    alt=""
                    className="absolute top-[100%] left-[50%]"
                  />
                )}
                {index === 2 && (
                  <img
                    src="/htwLine2.svg"
                    alt=""
                    className="absolute bottom-[99%] left-[50%]"
                  />
                )}
                <div className="flex items-start gap-6 h-full z-[1] relative">
                  <div className="bg-[#86BF4C] text-white w-12 h-full rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0 min-h-[100px]">
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
              </div>
            </div>
            <div className="flex-1"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
