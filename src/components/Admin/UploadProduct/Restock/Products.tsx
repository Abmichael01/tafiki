import { useState } from "react";
import Header from "../Header";
import rice from "@/assets/images/rice.webp"
import { Link } from "react-router-dom";

export default function Products() {
  const [products] = useState([
    {
      id: 1,
      name: "Food Hybrid Rice",
      price: "£50 per unit",
      units: 5,
      bags: 25,
      status: "Low",
      image: "🌾"
    },
    {
      id: 2,
      name: "Food Hybrid Beans",
      price: "£75 per unit", 
      units: 15,
      bags: 25,
      status: "Good",
      image: "🫘"
    },
    {
      id: 3,
      name: "Food Hybrid Plantain Flour",
      price: "£42 per unit",
      units: 15,
      bags: 25,
      status: "Good", 
      image: "🌾"
    },
    {
      id: 4,
      name: "Food Hybrid Yam Flour",
      price: "£55 per unit",
      units: 15,
      bags: 25,
      status: "Good",
      image: "🍠"
    }
  ]);

  const getStatusColor = (status: string) => {
    return status === "Low" ? "text-[#B52217] bg-[#B522171A]" : status === "average" ? "text-[#FFD60A] bg-[#FFD60A1A]" :  "text-[#16A34A] bg-[#16A34A1A]";
  };

  return (
    <div className="">
      <Header title="Restock Product" description="Select product to restock" />

      {/* Products List */}
      <div className="p-4">
        <div className="">
          {/* Table Header */}
          <div className="flex items-center justify-between px-[8px] py-[4px] bg-[#F9F9F9]">
            <span className="text-sm font-medium text-gray-700">Product</span>
            <span className="text-sm font-medium text-gray-700">Units left</span>
          </div>

          {/* Product Rows */}
          <div className="divide-y divide-gray-100">
            {products.map((product) => (
              <Link to="?dialog=upload-product&current=restock-product" key={product.id} className="flex items-center justify-between p-[8px] hover:bg-gray-50 cursor-pointer">
                {/* Product Info */}
                <div className="flex items-center space-x-[8px]">
                  <img src={rice} alt="product-image" className="w-[47px]" />
                  <div className="space-y-[8px]">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.price}</p>
                  </div>
                </div>

                {/* Units Info */}
                <div className="flex flex-col items-end gap-[8px]">
                  <p className="text-sm text-gray-900">
                    {product.units} units ({product.bags} bags)
                  </p>
                  <p className={`text-xs font-medium w-fit px-[8px] py-[2px] ${getStatusColor(product.status)}`}>
                    {product.status}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}