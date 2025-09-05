import Hero from "@/components/LandingPage/Hero";
import Mission from "@/components/LandingPage/Mission";
import Navbar from "@/components/LandingPage/Navbar";
import Root from "@/components/LandingPage/Root";
import Footer from "@/components/LandingPage/Footer";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-start sm:items-center relative overflow-hidden">
      <Navbar />
      <Hero />
      <Root />
      <Mission />
      <Footer />
    </div>
  );
};

export default LandingPage;
