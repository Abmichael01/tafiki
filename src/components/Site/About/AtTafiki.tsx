import Mission from "@/components/LandingPage/Mission";

export default function AtTafiki() {
  return (
    <div className=" section-spacing space-y-10 bg-primary py-20 rounded-t-[60px] text-white">
      <div className="section-padding space-y-5 text-center font-gilroy font-[400] relative">
        <h1 className="text-[22px]">
          At Tafiki, We believe food is{" "}
          <span className="text-[#86BF4C]">more</span> than sustenance
        </h1>
        <img src="/about/family.png" alt="" className="rounded-[40px] w-full" />
        <h1 className="text-[22px]">
          It’s a bridge to culture, memory, and{" "}
          <span className="text-[#86BF4C]">home</span>{" "}
        </h1>
      </div>
      <div className="flex justify-end">
        <img
          src="/about/svg1.svg"
          alt=""
          //   className="translate-x-[80px]"
        />
      </div>
      <h1 className="text-[32px] text-white/50 font-satoshi section-padding">
        Rooted in the richness of{" "}
        <span className="text-white">African tradition</span>, we’re building a{" "}
        <span className="text-white">modern food logistics platform</span> that
        connects{" "}
        <span className="text-white">producers, virtual distributors</span>, and{" "}
        <span className="text-white">retailers</span> in a{" "}
        <span className="text-white">seamless, tech-powered</span> supply chain
      </h1>
      <Mission about />
      <div className="text-center section-padding space-y-8">
        <h1 className="text-[22px] font-gilroy font-[600]">
          {" "}
          <span className="text-[#86BF4C]">Smarter</span> Food Distribution
          Starts Here
        </h1>
        <div className="relative">
          <img
            src="/about/svg2.svg"
            alt=""
            className="absolute top-[-60px] left-[-80px] "
          />
          <div className="bg-[#193607] p-10 relative rounded-xl flex flex-col-reverse lg:flex-row gap-10 lg:h-[450px] items-center">
            <div className="text-left text-white font-satoshi text-[18px] space-y-6 relative z-[9]">
              <p>
                Tafiki uses a Next-Gen consignment model where Virtual
                Distributors sponsor products and stock, and Tafiki fulfills and
                delivers them to retail shops who only pay for them after they
                are sold within a specified period of time. This means:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <span className="font-[700]">No warehouse stress</span>
                </li>
                <li>
                  <span className="font-[700]">No upfront inventory cost</span>
                </li>
                <li>
                  <span className="font-[700]">
                    Risk-free access to high-quality African food products
                  </span>
                </li>
                <li>
                  <span className="font-[700]">
                    Full control over retail-ready distribution
                  </span>
                </li>
              </ul>
            </div>
            <img
              src="/about/tafiki.png"
              alt=""
              className=" h-[350px] lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
