import React from "react";
import garri from "@/assets/images/garriProduct.webp";
import { Link } from "react-router-dom";
// import PriceCalculator from "./PriceCalculator";
import { ShopProduct } from "@/types";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { addProductToCart } from "@/api/apiEndpoints";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { FiPlus } from "react-icons/fi";
import { ArrowRight } from "lucide-react";

interface Props {
  item: ShopProduct;
}

const ShopItem: React.FC<Props> = ({ item }) => {
  // const queryClient = useQueryClient();
  // const { mutate, isPending } = useMutation({
  //   mutationFn: (data: AddToCartData) => addProductToCart(data),
  //   onSuccess: () => {
  //     toast.success("Product added to cart successfully");
  //     queryClient.invalidateQueries({ queryKey: ["cartItems"] });
  //   },
  //   onError: (error) => {
  //     // Handle error, e.g., show an error notification
  //     console.error("Error adding product to cart:", error);
  //   },
  // });
  // const [unit, setUnit] = React.useState(1);

  // const handleAddToCart = () => {
  //   mutate({
  //     product_id: item.product_id,
  //     quantity: unit,
  //   });
  // };

  return (
    <div className="flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:items-center lg:px-[24px] py-[20px] border-b border-[#F0F0F0]">
      <div className="flex gap-[24px] items-center">
        <img src={garri} alt="" className="w-[106px]" />
        <div className="space-y-2">
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-[16px] font-semibold">
              {item.name} ({item.kg_per_unit}kg)
            </h1>
          </div>
          <p className="text-sm sm:text-base">
            1 unit ={" "}
            <span className="font-semibold">{item.quantity_per_unit} bags</span>
          </p>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              Vendor: {item.company_name}
            </span>
        </div>
      </div>
      <div className="space-y-[20px]">
        {/* <PriceCalculator
          price={Number(item.price)}
          unit={unit}
          setUnit={setUnit}
        /> */}

        <Link
          to={`/partner/shop/${item.product_id}`}
          className="border border-[#15221B] hover:bg-[#F9F9F9] transition text-sm text-[#15221B] w-fit py-[8px] px-[20px] rounded-[4px] flex gap-3 items-center"
        >
          View Product
          <ArrowRight className="opacity-[0.7] size-[16px]" />
        </Link>
        {/* <Button
          disabled={isPending}
          onClick={handleAddToCart}
          variant={"outline"}
          className="border border-[#15221B] text-[#15221B] w-full py-[8px] rounded-[2px]"
        >
          {isPending ? "Making Order" : "Make Order"}
          {isPending ? (
            <Loader2 className="size-[20px] animate-spin" />
          ) : (
            <FiPlus />
          )}
        </Button> */}
      </div>
    </div>
  );
};

export default ShopItem;
