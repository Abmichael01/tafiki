import { cn } from "@/lib/utils";
import { Stars } from "lucide-react";
import React from "react";

interface RandomStarsProps {
  className?: string;
}

const RandomStars: React.FC<RandomStarsProps> = ({ className = "" }) => {
  const starPositions = [
    "absolute top-0 right-[50px] rotate-[23.87deg] size-4",
    "absolute top-0 left-[10px] rotate-[12deg]",
    "absolute bottom-[-50px] right-[-60px]",
    "absolute top-[0px] left-[300px] rotate-[25deg] size-3",
    "absolute top-[100px] left-[200px] rotate-[-30deg] size-2 text-black",
  ];

  return (
    <div className={cn(
      `absolute inset-0 w-full h-full text-neutral-700`, className
    )}>
      <div className="relative w-full h-full">
        {starPositions.map((posClass, index) => (
          <Stars
            key={index}
            className={` opacity-60 ${posClass}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomStars;
