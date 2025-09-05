
import { motion } from "framer-motion";
import { fadeInUp, zoomIn } from "@/lib/animations";

export default function FlowChart() {
  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={zoomIn}
      className="section-spacing"
    >
        <img src="/flow-chart.png" alt="" className="w-full h-auto" />
    </motion.div>
  )
}
