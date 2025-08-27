import React, { useEffect } from "react";
import { CartItem as CartItemType } from "@/types";
import useCartStore from "@/stores/cartStore";
import CartItems from "@/components/PartnerDashboard/Cart/CartItems";
import CartSummary from "@/components/PartnerDashboard/Cart/CartSummary";
import { useQuery } from "@tanstack/react-query";
import { viewCart } from "@/api/apiEndpoints";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoadingData from "@/components/Admin/LoadingData";

const Cart: React.FC = () => {
  const { items, updateCart } = useCartStore();
  const { data, isLoading } = useQuery({
    queryKey: ["cartItems"],
    queryFn: viewCart,
  });

  console.log(data);

  useEffect(() => {
    if (data) {
      updateCart(data.items as CartItemType[]);
    }
  }, [updateCart, data]);

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-[30px]">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[200px]">
          <h2 className="text-[30px] font-semibold font-satoshi">
            Your cart is empty.
          </h2>
          <Link
            to="/partner/shop"
            className="text-white mt-5 text-[14px] font-medium bg-[#15221B] button"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <>
          <CartItems items={items} title="Cart" />
          <CartSummary items={items} />

          <Link to="/partner/cart/delivery-information">
            <Button className="w-full bg-primary">Checkout</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
