import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
    price: number;
    unit: number;
    setUnit: ( unit: number ) => void;
}

const PriceCalculator: React.FC<Props> = ({ price, unit, setUnit }) => {
    const [ totalPrice, setTotalPrice ] = useState(price)
    const onChangeUnit = (value: string) => {
        setUnit(Number(value))
    }

    useEffect(() => {
    setTotalPrice(unit * price)
    }, [unit, price]);

  return (
    <div className="flex items-center gap-[10px]">
      <Select onValueChange={onChangeUnit} defaultValue={"1"}>
        <SelectTrigger className="w-[100px] rounded-[4px] bg-[#F0F0F0]">
          <SelectValue placeholder="Select Page" />
        </SelectTrigger>
        <SelectContent align="end">
          {Array.from({ length: 20 }, (_, index) => (
            <SelectItem key={index + 1} value={(index + 1).toString()}>
              {index + 1} Unit{index + 1 > 1 ? "s" : ""}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="font-[700] text-[20px] text-[#6E6E6E]"> = </p>
      <h1 className="text-[20px] text-[#252525] font-[700] font-satoshi">
        ${totalPrice}
      </h1>
    </div>
  );
};

export default PriceCalculator;
