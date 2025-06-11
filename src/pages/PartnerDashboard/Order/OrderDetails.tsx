import Overview from "@/components/PartnerDashboard/MyOrders/OrderDetails/Overview";
import Products from "@/components/PartnerDashboard/MyOrders/OrderDetails/Products";
import Timeline from "@/components/PartnerDashboard/MyOrders/OrderDetails/Timeline";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const products = [
  {
    id: "1a9f84f2-6d73-48cb-9f72-3941c2b8723e",
    name: "Food Hybrid Rice",
    price: 350,
    units: "5 units (25 bags)",
    type: "rice",
  },
  {
    id: "8b21d3e9-43fb-4d18-b798-4e3ef5ac2d3a",
    name: "Food Hybrid Beans",
    price: 350,
    units: "3 units (15 bags)",
    type: "beans",
  },
];


const OrderDetails: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/portfolio">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Order details</h1>
        </div>
      </div>
      <Overview />
      <Products products={products} />
      <Timeline />
    </div>
  );
};

export default OrderDetails;
