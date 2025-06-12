import { AddToCartData, CartItem as CartItemType } from "@/types";
import React from "react";
import garri from "@/assets/images/garriProduct.webp";
import { Loader2, Minus, Plus, X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart, removeProductFromCart } from "@/api/apiEndpoints";
import { toast } from "sonner";

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending: adding } = useMutation({
    mutationFn: (data: AddToCartData) => addProductToCart(data),
    onSuccess: () => {
      toast.success("Product added to cart successfully");
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: (error) => {
      // Handle error, e.g., show an error notification
      console.error("Error adding product to cart:", error);
    },
  });
  const { mutate: removeProduct, isPending: removing } = useMutation({
    mutationFn: (data: Partial<AddToCartData>) => removeProductFromCart(data),
    onSuccess: () => {
      toast.success("Product remove from cart successfully");
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: (error) => {
      // Handle error, e.g., show an error notification
      console.error("Error removing product from cart:", error);
    },
  });
  return (
    <div className="flex flex-col min-[600px]:flex-row pb-5 justify-between border-b gap-4">
      <div className="space-y-2">
        <div className="flex gap-[24px] items-center">
          <img src={garri} alt="" className="w-[106px]" />
          <div className="space-y-[8px]">
            <h2 className="text-[] font-[500]">{item.product_name}</h2>
            <p className=""> { item.quantity } units = { item.quantity * 100} bags </p>
          </div>
        </div>
        <button
          onClick={() => {
            removeProduct({
              product_id: item.product_id,
            });
          }}
          className="flex items-center gap-1 px-3 cursor-pointer py-1 hover:bg-[#B52217]/10 rounded-full text-[#B52217] font-satoshi [&_svg:not([class*='size-'])]:size-4 text-[14px]"
        >
          Remove
          <X />
        </button>
      </div>
      <div className="flex flex-row-reverse min-[600px]:flex-col justify-between items-end">
        <p className="">{item.price * item.quantity}</p>
        <div className="px-2 py-2 bg-[#F9F9F9] rounded-[8px] flex items-center gap-3 text-[#6E6E6E] font-satoshi">
          <button
            disabled={adding || removing}
            onClick={() => {
              console.log("decrementing", item.quantity);
              if (item.quantity > 1) {
                removeProduct({
                  product_id: item.product_id,
                  quantity: 1,
                });
              }
            }}
            className=" cursor-pointer"
          >
            {adding || removing ? (
              <Loader2 className="animate-spin size-[15px]" />
            ) : (
              <Minus className="size-[15px]" />
            )}
          </button>
          {item.quantity} unit(s)
          <button
            disabled={adding || removing}
            onClick={() => {
              console.log("incrementing", item.quantity);
              mutate({
                product_id: item.product_id,
                quantity: 1,
              });
            }}
            className="cursor-pointer"
          >
            {adding || removing ? (
              <Loader2 className="animate-spin size-[15px]" />
            ) : (
              <Plus className="size-[15px]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
