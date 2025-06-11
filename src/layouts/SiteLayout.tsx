// SiteLayout.tsx
import Footer from "@/components/Site/Footer";
import Navbar from "@/components/Site/Navbar";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const SiteLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Smooth scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="pb-40">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SiteLayout;