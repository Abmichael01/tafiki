import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import PriceCalculator from "@/components/PartnerDashboard/Shop/PriceCalculator";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import garri from "@/assets/images/garriProduct.webp";
import { useQuery } from "@tanstack/react-query";
import { getShopProduct } from "@/api/apiEndpoints";
import { AddToCartData } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart } from "@/api/apiEndpoints";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import ShopDetailsSkeleton from "@/components/PartnerDashboard/Shop/ShopDetailsSkeleton";



const ShopItemDetails: React.FC = () => {
  const [unit, setUnit] = React.useState(1);
  const location = useLocation()
  const id = location.pathname.split("/").pop()

  const { data, isLoading } = useQuery({
    queryKey: ["shopItem"],
    queryFn: () => getShopProduct(id as string)
  })

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
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

  const handleAddToCart = () => {
    mutate({
      product_id: data?.product_id as string,
      quantity: unit,
    });
  };

  if(isLoading) {
    return <ShopDetailsSkeleton />
  }

  return (
    <div className="space-y-8">
      <div className="">
        <Link to="/partner/shop" className="">
          <GoArrowLeft className="size-[20px]" />
        </Link>
      </div>
      <div className="space-y-[60px]">
        <div className="space-y-[40px]">
          <div className="flex flex-col md:flex-row gap-[40px]">
            <img src={garri} alt="" className="w-[240px] object-contain" />
            <div className="space-y-[20px] text-start">
              <div className="space-y-[2px]">
                {/* <p className="text-[#DF4D42E5]  text-[12px] font-[500]">
                  10 units left
                </p> */}
                <h1 className="text-[24px] text-[#494949] ">{data?.name}</h1>
              </div>
              <div className="space-y-[4px]">
                <p className="text-[14px] font-satoshi font-[500]">
                  1 unit = {data?.quantity_per_unit} bags
                </p>
                <PriceCalculator
                  price={Number(data?.price as string)}
                  unit={unit}
                  setUnit={setUnit}
                />
              </div>
              <Button
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
        </Button>
            </div>
          </div>
          <div className="space-y-[12px]">
            <h1 className="text-[16px] font-satoshi font-[700]">
              <span className="text-[#16A34A]">{data?.roi_percentage}% Returns</span>
              <span className="text-[#494949]"> on overall purchase</span>
            </h1>
            <p className="text-[18px] text-wrap font-satoshi rounded-[12px] bg-[#F9F9F9] lg:w-[770px] py-[16px] px-[12px]">
              {data?.description}
            </p>
          </div>
        </div>
        {/* <div className="space-y-[20px]">
            <h1 className="text-center font-[600] text-[20px]">Check out other products</h1>
            <div className="flex flex-wrap gap-[20px] justify-between">
                {otherProdcts.map((product, index) => (
                    <div className="text-center space-y-[24px]" key={index}>
                        <img src={product.img} alt="" />
                        <p className="text-[#252525] font-satoshi fton-[500] text-[16px]">{product.name.split(" ")[2]}</p>
                    </div>
                ))}
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default ShopItemDetails;
