import { motion } from 'framer-motion'

const vendors = [
  { name: "FoodHybrid", logo: "/foodhybrid.svg" },
  { name: "AgriCorp", logo: "/foodhybrid.svg" },
  { name: "FarmFresh", logo: "/foodhybrid.svg" },
  { name: "GreenHarvest", logo: "/foodhybrid.svg" },
  { name: "OrganicPlus", logo: "/foodhybrid.svg" },
  { name: "NatureFoods", logo: "/foodhybrid.svg" },
  { name: "PureHarvest", logo: "/foodhybrid.svg" },
  { name: "EcoFarms", logo: "/foodhybrid.svg" }
]

export default function Vendors() {
  return (
    <div className="section-padding mt-30 flex flex-col gap-5 mask-l-from-80% mask-l-to-90% mask-r-to-90% mask-r-from-80%">
        <h1 className="font-[900] font-satoshi text-[#5D5D5D] text-[20px] text-center">Our Trusted Vendors</h1>
        
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ 
              x: [0, -100 * vendors.length]
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {vendors.map((vendor, index) => (
              <img 
                key={`first-${index}`}
                src={vendor.logo} 
                alt={vendor.name} 
                className="size-[100px] flex-shrink-0" 
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {vendors.map((vendor, index) => (
              <img 
                key={`second-${index}`}
                src={vendor.logo} 
                alt={vendor.name} 
                className="size-[100px] flex-shrink-0" 
              />
            ))}
          </motion.div>
        </div>
    </div>
  )
}
