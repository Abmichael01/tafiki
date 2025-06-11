import React from "react";
import { Outlet } from "react-router-dom";
import image from "@/assets/images/auth.webp";
import patterns from "@/assets/images/patterns.webp";
import Motto from "@/components/Others/Motto";
import Logo from "@/components/Others/Logo";


const AuthLayout: React.FC = () => {
  return (
    <div className="overflow-hidden relative">
      
      <div className=" p-0 md:p-5 w-full md:w-1/2 shrink-0 bottom-0 h-full top-0 left-0 absolute md:fixed">
        <div className="rounded-xl h-full overflow-hidden relative before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-[2px] ">
          <div className="absolute top-0 right-0 left-0 z-[3] flex justify-center mt-5">
            <Logo className=" max-[500px]:w-[92px] max-[500px]:h-[46px] " color="black" />{" "}
          </div>
          <Motto className="absolute bottom-5 left-5 " />
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className=" relative md:ml-[50%] w-full md:w-1/2 pb-10 pt-24 p-2 px-5 sm:px-10 lg:px-14 items-center justify-center md:justify-start min-h-screen ">
        <div className=" max-md:mb-[180px] max-md:mt-[20px] bg-white w-full md:bg-transparent rounded-xl md:p-0 p-6 max-sm:px-[20px] max-sm:py-[40px] h-fit md:h-full">
          <Outlet />
        </div>
        <img
        src={patterns}
        alt=""
        className="w-[500px] h-[500px] rounded-full absolute top-[-300px] right-[-300px] md:block hidden"
      />
      </div>
    </div>
  );
};

export default AuthLayout;
