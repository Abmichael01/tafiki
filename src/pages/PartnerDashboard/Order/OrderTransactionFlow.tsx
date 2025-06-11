import Overview from "@/components/PartnerDashboard/MyOrders/OrderDetails/Overview";
import Products from "@/components/PartnerDashboard/MyOrders/OrderDetails/Products";
import History from "@/components/PartnerDashboard/Portfolio/History";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const transactions = [
    {
      type: "Remittance Inflow",
      time: "3:31am, 21st Jan. 2025",
      amount: "+£2350",
    },
    {
      type: "Remittance Inflow",
      time: "16:32pm, 21st Jan. 2025",
      amount: "+£2350",
    },
    {
      type: "Remittance Inflow",
      time: "5:30am, 21st Jan. 2025",
      amount: "+£2350",
    },
    {
      type: "Remittance Inflow",
      time: "5:30am, 21st Jan. 2025",
      amount: "+£2350",
    },
  ];

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


const OrderTransactionFlow: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/my-orders/8b21d3e9-43fb-4d18-b798-4e3ef5ac2d3a">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Order details<span className=" text-[16px] text-[#929292]">/Transaction flow</span></h1>
        </div>
      </div>
      <Overview />
      <Products products={products} transactionsPage />
      <History heading="Transactions" data={transactions} />
    </div>
  );
};

export default OrderTransactionFlow;
