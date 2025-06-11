import React from "react";
import { CartItem as CartItemType } from "@/types";
import useCartStore from "@/stores/cartStore";
import CartItem from "@/components/PartnerDashboard/Cart/CartItem";

interface CartItemContainerProps {
  items: CartItemType[];
  title?: string;
}

const CartItems: React.FC<CartItemContainerProps> = ({ 
  items, 
  title = "Items" 
}) => {
  const { getItemCount } = useCartStore();

  return (
    <div className="space-y-[20px]">
      <h2 className="text-[24px] flex items-center gap-1">
        {title} <span className="text-[14px]">({getItemCount()})</span>
      </h2>

      <div className="space-y-[20px]">
        {items?.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;