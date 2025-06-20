import React from "react";
import RandomStars from "./RandomStars";

const WelcomeText: React.FC = () => {
  return (
    <div className="relative w-fit mx-auto text-center flex flex-col items-center gap-5">
      {/* Main heading */}
      <h1
        className="
          hidden sm:block sm:text-[64.58px] lg:text-[95.57px] tracking-tighter leading-tight font-extrabold 
          text-transparent bg-clip-text
          bg-gradient-to-r from-rose-400 via-rose-600 to-[#15221B]
          animate-[gradientShift_3s_ease-in-out_infinite]
          drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]
        "
      >
        Smarter Food Distribution Starts Here
      </h1>

      {/* Mobile heading */}
      <h1
        className="
          sm:hidden flex flex-col text-[54px] tracking-tighter font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-rose-400 via-rose-600 to-black
          animate-[gradientShift_3s_ease-in-out_infinite]
          drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]
        "
      >
        <span>Smarter Food</span>
        <span>Distribution</span>
        <span>Starts Here</span>
      </h1>

      {/* Info box */}
      <div
        className="
          text-[20px] p-10 space-y-[15px] max-w-5xl
          text-white rounded-xl shadow-xl
          bg-gradient-to-br from-[#15221B]/90 to-[#2C3D35]/90 border border-white/10
          backdrop-blur-md
        "
      >
        <p>
          We connect virtual distributors with retail shops in one seamless food logistics platform.
        </p>
        <p>
          Retail-ready food products — funded by virtual distributors, fulfilled by Hybrid, paid for only after sales.
        </p>
      </div>

      <RandomStars />

      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeText;
