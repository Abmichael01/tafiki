import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaUserCircle } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewBeneficiary: React.FC = () => {
  return (
    <div className="space-y-[24px]">
      <h1 className="text-[18px] text-[#6E6E6E]">
        Enter your account details to make a withdraw
      </h1>
      <div className="space-y-[16px]">
        <h1 className="text-[16px] font-[600]">New Beneficiary</h1>
        <div className="space-y-[12px] font-satoshi">
          <div className="space-y-[8px]">
            <h1 className="text-[14px] font-[500]">Select Bank</h1>
            <Select>
              <SelectTrigger className="w-full px-[16px] h-full py-[20px] bg-[#F0F0F0] text-[16px] [&_svg]:text-[#6E6E6E]">
                <SelectValue placeholder="Barclays Bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-[8px]">
            <h1 className="text-[14px] font-[500]">Account number</h1>
            <input
              type="text"
              className="dialog-input"
              placeholder="1234567890"
            />
          </div>
          <div className="space-y-[8px]">
            <h1 className="text-[14px] font-[500]">Account name</h1>
            <div className="px-[16px] bg-[#F0F0F0] rounded-[12px] w-full text-[18px] flex items-center">
              <FaUserCircle className="text-[#494949] size-[16.6px]" />
              <input
                value={"Jack Segun Diaro"}
                type="text"
                className="w-full px-[12px] py-[10px] outline-none"
                
              />
              <CheckCircle2 className="text-[#16A34A]" />
            </div>
          </div>
        </div>
        <Button className="bg-[#15221B] w-full mt-[60px]">Next</Button>
      </div>
    </div>
  );
};

export default NewBeneficiary;
