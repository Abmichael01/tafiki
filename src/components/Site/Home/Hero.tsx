import { IoGlobeOutline } from "react-icons/io5";

const statistics = [
  { number: "100+", label: "Orders Delivered" },
  { number: "3000+", label: "Virtual Distributors" },
  { number: "2000+", label: "Retail Shops" },
  { number: "5+", label: "Vendors" }
]

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full gap-[30px] min-h-[700px]">
      <div className=" section-padding-left max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] relative z-[1] mt-40">
        <h1 className="font-gilroy text-[40px] md:text-[60px] font-[400] leading-none">
          Smarter Food Logistics
        </h1>
        <p className="text-[16px] md:text-[18px] font-[400] text-[#5D5D5D] leading-[24px] mt-[20px]">
          Reimagining how food moves, empowering smarter distribution, enriching
          local communities, and bringing Africa’s rich food legacy to the
          world.
        </p>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-white mt-[40px]">
          <span>Get Started</span>
          <IoGlobeOutline />
        </button>
        
        <div className="mt-16 font-satoshi">
          <p className="text-[#5D5D5D] text-sm mb-4">With over:</p>
          <div className="grid grid-cols-4 gap-4">
            {statistics.map((stat, index) => (
              <div key={index} className="text-start">
                <h3 className="text-[24px] font-bold text-[#86BF4C] ">{stat.number}</h3>
                <p className="text-[#5D5D5D] text-xs font-[500]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/landinghero.png"
        alt="hero"
        loading="lazy"
        className="lg:h-[700px] object-cover absolute lg:relative top-0 right-0 min-[200px]:size-[150px] min-[300px]:size-[200px] min-[400px]:size-[250px] sm:size-[300px] md:size-[400px] rounded-bl-full lg:rounded-bl-none lg:w-auto"
      />
      {/* <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[white] to-transparent " /> */}
    </div>
  );
}
