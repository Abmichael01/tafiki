import { IoGlobeOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full gap-[30px] min-h-[650px]">
      <div className=" section-padding-left max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[48%] relative z-[1]">
        <h1 className="font-gilroy text-[40px] md:text-[60px] font-[400] leading-none">
          Smarter Food Logistics
        </h1>
        <p className="text-[16px] md:text-[18px] font-[400] text-[#5D5D5D] leading-[24px] mt-[20px]">
          Reimagining how food moves, empowering smarter distribution, enriching
          local communities, and bringing Africa’s rich food legacy to the
          world.
        </p>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-white mt-[40px]">
          <span>Visit Our Website</span>
          <IoGlobeOutline />
        </button>
      </div>
      <img
        src="/landinghero.png"
        alt="hero"
        loading="lazy"
        className="lg:h-[700px] object-cover absolute top-0 right-0 min-[200px]:size-[150px] min-[300px]:size-[200px] min-[400px]:size-[250px] sm:size-[300px] md:size-[400px] rounded-bl-full lg:rounded-bl-none lg:w-auto"
      />
      {/* <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[white] to-transparent " /> */}
    </div>
  );
}
