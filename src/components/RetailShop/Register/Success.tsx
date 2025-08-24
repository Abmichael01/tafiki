import { BadgeCheck } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Success: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-[20px]">
      <h2 className="text-[#15221B] text-[20px] md:text-[24px] text-center">
        Welcome to FoodHybrid!
      </h2>
      <p className="text-[#6E6E6E] text-center">
        Your retail shop account has been created successfully.
      </p>
      <BadgeCheck className="text-white fill-[#16A34A] size-[100px] md:size-[127.45px]" />
      <Link
        to="/retail-shop/login"
        className="px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default Success;
