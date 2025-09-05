import Logo from "@/components/Others/Logo";

export default function Promise() {
  return (
    <div className="section-padding section-spacing">
      <div className="flex gap-4 items-center justify-center text-[48px] text-[#5D5D5D] font-satoshi leading-none font-[950] mb-20">
        <h1 className="">The</h1>
        <Logo noLink className="w-[150px]" />
        {"Promise"}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:h-[573px] items-center">
        <img
          src="/landingMan.png"
          alt=""
          className=" h-[400px] lg:h-full w-auto rounded-xl shrink-0"
        />
        <div className="h-full flex-1 bg-primary rounded-xl p-10 space-y-10 font-gilroy text-white flex flex-col justify-center">
          <p className="text-[30px] font-[400] font-gilroy">
            <span className="text-[#86BF4C]">Our recipe</span> is simple;
          </p>
          <ul className="list-disc pl-8 space-y-4 text-[22px] font-[400]">
            <li>
              <span className="text-white">Natural Ingredients</span>
            </li>
            <li>
              <span className="text-white">Ethical Sourcing</span>
            </li>
            <li>
              <span className="text-white">Seamless Delivery</span>
            </li>
            <li>
              <span className="text-white">AI-Powered Supply Chain</span>
            </li>
            <li>
              <span className="text-white">
                Commitment to Freshness, Affordability, and Cultural Ease.
              </span>
            </li>
          </ul>
          <p className=" text-[18px] mt-6">
            <span className="italic">
              {" "}
              The <span className="text-[#86BF4C]">result?</span> A taste that
              feels like
            </span>{" "}
            <span className="text-[#86BF4C]">home.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
