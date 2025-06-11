// ShopItems.tsx
import React from "react";
import ShopItem from "./ShopItem";
import ShopItemSkeleton from "./ShopItemSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getShopProducts } from "@/api/apiEndpoints";

const ShopItems: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["shopItems"],
    queryFn: getShopProducts,
  });

  console.log(data);

  if (isLoading) {
    return (
      <div>
        {/* Render multiple skeleton items */}
        {Array.from({ length: 6 }).map((_, index) => (
          <ShopItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {data?.map((item, index) => (
        <ShopItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ShopItems;