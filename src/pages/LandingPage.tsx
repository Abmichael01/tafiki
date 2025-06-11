import HowWeOperate from "@/components/LandingPage/HowWeOperate";
import Banners from "@/components/LandingPage/Banners";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Root from "@/components/LandingPage/Root";
import Logo from "@/components/Others/Logo";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-start sm:items-center relative pb-10 overflow-hidden">
      <div className="section-padding w-full hidden sm:flex sm:justify-center py-10">
        <Logo className="relative z-[2]" />
      </div>
      <Hero />
      <Root />
      <HowWeOperate />
      <Banners />
      <Footer />
    </div>
  );
};

export default LandingPage;
