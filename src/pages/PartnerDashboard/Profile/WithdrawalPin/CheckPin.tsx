import { checkTransactionPin } from "@/api/apiEndpoints";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CheckPin: React.FC = () => {
  const [pin, setPin] = useState("")
  const [showPin, setShowPin] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: { password: string }) => checkTransactionPin(data),
    onSuccess: (data) => {
      toast.success("Password verified successfully!");
      setShowPin(true);
      setIsLoading(false);
      const pinValue = data["Transaction pin"];
      setPin(pinValue);
    },
    onError: (error: Error) => {
      toast.error(error.message);
      setIsLoading(false);
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }
    mutate({ password });

    setIsLoading(true);
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile/withdrawal-pin">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Check Withdrawal PIN</h1>
        </div>
      </div>
      <div className=" flex justify-center">
        {!showPin && (
          <form onSubmit={handleSubmit} className="space-y-[60px] w-full md:w-[698px]  items-center">
            <div className="space-y-[8px] flex flex-col items-center w-full ">
              <label htmlFor="password" className="text-[14px] text-[#6E6E6E]">
                Password
              </label>                                                                                                                                                     
              <input
                id="password"
                type="password"
                name="new-password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-[18px] px-[20px] border border-[#6E6E6E] w-full"
                placeholder="Enter your login password"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading || !password.trim()}
            >
              {isLoading ? "Verifying..." : "Next"}
            </Button>
          </form>
        )}

        {showPin && (
          <div className="space-y-[24px] w-full md:w-[698px] flex items-center flex-col">
            <h1 className="text-[14px] text-[#6E6E6E]">Withdrawal PIN</h1>
            <div className="flex gap-[24px]">
              {pin.split("").map((pin, index) => (
                <h1
                  key={index}
                  className="text-[32px] font-[500] border border-[#15221B1A]  px-[20px] py-[10px]"
                >
                  {pin}
                </h1>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckPin;