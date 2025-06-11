import React from "react";
import RandomStars from "./RandomStars";

const WelcomeText: React.FC = () => {
  return (
    <div className="relative">
      <h1 className="hidden sm:block sm:text-[64.58px] lg:text-[95.57px] tracking-tighter text-center font-bold welcome-text-gradient relative">
        <span>Welcome to Food HybrId</span>
      </h1>
      <h1 className="text-[56px] tracking-tighter text-center sm:hidden flex flex-col font-[800]">
        <span className="welcome-text-gradient">Welcome</span>
        <span className="welcome-text-gradient">to</span>
        <span className="welcome-text-gradient">Food HybrId</span>
      </h1>
      <RandomStars />
    </div>
  );
};

export default WelcomeText;
