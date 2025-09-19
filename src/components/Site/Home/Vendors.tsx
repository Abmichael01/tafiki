// import { motion } from 'framer-motion'

// const vendors = [
//   { name: "FoodHybrid", logo: "/foodhybrid.png" },
//   { name: "FoodCore", logo: "/foodcore.jpg" },
// ];

// Full vendors array for scrolling (commented out for now)
// const allVendors = [
//   { name: "FoodHybrid", logo: "/foodhybrid.svg" },
//   { name: "AgriCorp", logo: "/foodhybrid.svg" },
//   { name: "FarmFresh", logo: "/foodhybrid.svg" },
//   { name: "GreenHarvest", logo: "/foodhybrid.svg" },
//   { name: "OrganicPlus", logo: "/foodhybrid.svg" },
//   { name: "NatureFoods", logo: "/foodhybrid.svg" },
//   { name: "PureHarvest", logo: "/foodhybrid.svg" },
//   { name: "EcoFarms", logo: "/foodhybrid.svg" }
// ]

export default function Vendors() {
  return (
    <div className="section-padding mt-30 flex flex-col gap-5 mask-l-from-80% mask-l-to-90% mask-r-to-90% mask-r-from-80%">
      <h1 className="font-[900] font-satoshi text-[#5D5D5D] text-[20px] text-center">
        Our Trusted Vendors
      </h1>

      {/* Static display of two vendor logos */}
      <div className="flex items-center justify-center gap-8">
        {/* {vendors.map((vendor, index) => (
            <img 
              key={index}
              src={vendor.logo} 
              alt={vendor.name} 
              className="h-[60px] flex-shrink-0" 
            />
          ))} */}
        <img
          src={"/foodhybrid.png"}
          alt="FoodHybrid"
          className="h-[60px] flex-shrink-0"
        />
        <img
          src={"/foodcore.jpg"}
          alt="FoodCore"
          className="h-[100px] flex-shrink-0"
        />
      </div>

      {/* Scrolling animation code (commented out for now) */}
      {/* 
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ 
              x: [0, -100 * allVendors.length]
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
      {/* {allVendors.map((vendor, index) => (
              <img 
                key={`first-${index}`}
                src={vendor.logo} 
                alt={vendor.name} 
                className="size-[100px] flex-shrink-0" 
              />
            ))}
            {/* Duplicate set for seamless loop */}
      {/* {allVendors.map((vendor, index) => (
              <img 
                key={`second-${index}`}
                src={vendor.logo} 
                alt={vendor.name} 
                className="size-[100px] flex-shrink-0" 
              />
            ))}
          </motion.div>
        </div>
        */}
    </div>
  );
}
