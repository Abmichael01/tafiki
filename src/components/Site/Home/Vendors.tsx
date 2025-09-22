import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const vendors = [
  { name: "FoodHybrid", logo: "/foodhybrid.png", height: "60px" },
  { name: "FoodCore", logo: "/foodcore.jpg", height: "100px" },
  { name: "GreenOasis", logo: "/green_oasis.png", height: "80px" }
]

// Full vendors array for scrolling

export default function Vendors() {
  const [shouldScroll, setShouldScroll] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const contentWidth = contentRef.current.scrollWidth
        setShouldScroll(contentWidth > containerWidth)
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    
    return () => window.removeEventListener('resize', checkOverflow)
  }, [])

  return (
    <div className="section-padding mt-30 flex flex-col gap-5 mask-l-from-80% mask-l-to-90% mask-r-to-90% mask-r-from-80%">
      <h1 className="font-[900] font-satoshi text-[#5D5D5D] text-[20px] text-center">
        Our Trusted Vendors
      </h1>

      <div ref={containerRef} className="w-full overflow-hidden">
        {shouldScroll ? (
          // Auto-scroll when content overflows
          <motion.div 
            ref={contentRef}
            className="flex gap-8 items-center"
            animate={{ 
              x: [0, -100 * vendors.length]
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 12,
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
                className={`h-[${vendor.height}] flex-shrink-0`} 
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {vendors.map((vendor, index) => (
              <img 
                key={`second-${index}`}
                src={vendor.logo} 
                alt={vendor.name} 
                className={`h-[${vendor.height}] flex-shrink-0`} 
              />
            ))}
            {vendors.map((vendor, index) => (
              <img 
                key={`second-${index}`}
                src={vendor.logo} 
                alt={vendor.name} 
                className={`h-[${vendor.height}] flex-shrink-0`} 
              />
            ))}
          </motion.div>
        ) : (
          // Static display when content fits
          <div ref={contentRef} className="flex items-center justify-center gap-8">
            {vendors.map((vendor, index) => (
              <img 
                key={index}
                src={vendor.logo} 
                alt={vendor.name} 
                className={`h-[${vendor.height}] flex-shrink-0`} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
