// components/Register/RegisterRouter.tsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stage2 from "@/components/RetailShop/Register/Stage2";
import Stage3 from "@/components/RetailShop/Register/Stage3";
import Stage4 from "@/components/RetailShop/Register/Stage4";
import Stage5 from "@/components/RetailShop/Register/Stage5";

import Stage1 from "@/components/RetailShop/Register/Stage1";
import { cn } from "@/lib/utils";
import Success from "@/components/RetailShop/Register/Success";
import usePartnerSignupStore from "@/stores/partnerSingupStore";



const Register: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentStage = parseInt(searchParams.get("stage") as string) || 1;
  const success = searchParams.get("success");
  const { userData } = usePartnerSignupStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentStage === 2 && !userData.first_name) {
      navigate("/retail-shop/register?stage=1");
    }

    if (currentStage > 3 && !userData.email) {
      navigate("/retail-shop/register?stage=1");
    }
  }, [userData, navigate, currentStage]);

  return (
    <div className="w-full h-full flex flex-col gap-[30px]">
      {!success && (
        <div className="space-y-[20px] w-full">
          <div className="">
            <h2 className="font-satoshi text-center text-[#6E6E6E] text-[18px] md:text-[20px]">
              Create your store account
            </h2>
          </div>
          <div className="flex gap-[8px] justify-center w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1 w-full md:w-[71.1px] rounded-full",
                  index < currentStage ? "bg-[#15221B]" : "bg-[#15221B]/12"
                )}
              ></div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full">
        {currentStage === 1 && <Stage1 />}
        {currentStage === 2 && <Stage2 />}
        {currentStage === 3 && <Stage3 />}
        {currentStage === 4 && <Stage4 />}
        {currentStage === 5 && <Stage5 />}

      </div>

      {success && <Success />}
      
      <h3 className="italic text-[14px] md:text-[16px] text-[#636C67] justify-self-end hidden md:block text-center px-4">
        <span className="font-[700]">Retail Shop:</span> Join as a Retail Shop 
        (Vendor) to receive and remit product orders. Perfect for local retailers 
        looking to expand their product offerings.
      </h3>
    </div>
  );
};

export default Register;
