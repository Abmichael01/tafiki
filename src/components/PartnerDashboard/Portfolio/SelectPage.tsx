import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocation, useNavigate } from "react-router-dom";

const SelectPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const value = pathname.split("/").pop() || "wallet";
  

  const handleNavigation = (value: string) => {
    // Map select values to route paths
    navigate(`/partner/portfolio/${value}`)
  };

  return (
    <Select onValueChange={handleNavigation} defaultValue={value}>
      <SelectTrigger className="w-[150px] rounded-[4px]">
        <SelectValue placeholder="Select Page" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="portfolio">Portfolio (RIO)</SelectItem>
        <SelectItem value="wallet">Wallet</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectPage;
