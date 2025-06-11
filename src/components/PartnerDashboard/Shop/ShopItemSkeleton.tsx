// ShopItemSkeleton.tsx
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ShopItemSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:items-center lg:px-[24px] py-[20px] border-b border-[#F0F0F0]">
      <div className="flex gap-[24px] items-center">
        {/* Image skeleton */}
        <Skeleton className="w-[100px] h-[100px] rounded-md" />
        
        <div className="space-y-[8px]">
          {/* Product name skeleton */}
          <Skeleton className="h-[24px] w-[200px]" />
          {/* Unit info skeleton */}
          <Skeleton className="h-[16px] w-[120px]" />
        </div>
      </div>
      
      <div className="space-y-[20px]">
        {/* Price calculator skeleton */}
        <div className="flex gap-5">
          <Skeleton className="h-[40px] w-[100px]" />
          <Skeleton className="h-[40px] w-[150px]" />
        </div>
        
        {/* Button skeleton */}
        <Skeleton className="h-[40px] w-full rounded-[2px]" />
      </div>
    </div>
  );
};

export default ShopItemSkeleton;