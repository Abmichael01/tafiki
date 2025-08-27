import React, { useEffect } from "react";
import { CartItem as CartItemType } from "@/types";
import useCartStore from "@/stores/cartStore";
import CartItems from "@/components/PartnerDashboard/Cart/CartItems";
import CartSummary from "@/components/PartnerDashboard/Cart/CartSummary";
import DeliveryForm from "@/components/PartnerDashboard/Cart/DeliveryForm";
import { useQuery } from "@tanstack/react-query";
import { viewCart } from "@/api/apiEndpoints";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import TotalCost from "@/components/PartnerDashboard/Cart/TotalCost";
import LoadingData from "@/components/Admin/LoadingData";


const DeliveryInformation: React.FC = () => {
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
    <div className="">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/partner/cart">
          <GoArrowLeft className="size-[24px]" />
        </Link>
        <h1 className="text-[24px] font-satoshi font-semibold">Delivery Information</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - Cart Items */}
        <div className="space-y-6">
          <CartItems items={items} title="Items" />
            <TotalCost />
          <CartSummary items={items} summary={false} />
        </div>

        {/* Right Column - Delivery Form */}
        <div>
          <DeliveryForm />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;
