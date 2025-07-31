import React from "react";
import riceImage from "@/assets/images/rice.webp";
import beansImage from "@/assets/images/beans.webp";
import plantainFlourImage from "@/assets/images/plantainFlour.webp";
import yamFlourImage from "@/assets/images/yamFlour.webp";
import { Link } from "react-router-dom";

// Quantity status badge color mapping
const quantityStatusStyles: Record<
  string,
  { bg: string; text: string }
> = {
  Good: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  Average: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  Low: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
};

const products = [
  {
    id: 1,
    name: "FoodHybrid Rice",
    image: riceImage,
    pricePerUnit: "£50",
    bagsPerUnit: "5 bags",
    unitsAvailable: 15,
    totalBags: 75,
    quantityStatus: "Good",
  },
  {
    id: 2,
    name: "FoodHybrid Beans",
    image: beansImage,
    pricePerUnit: "£50",
    bagsPerUnit: "5 bags",
    unitsAvailable: 10,
    totalBags: 50,
    quantityStatus: "Average",
  },
  {
    id: 3,
    name: "FoodHybrid Plantain Flour",
    image: plantainFlourImage,
    pricePerUnit: "£50",
    bagsPerUnit: "5 bags",
    unitsAvailable: 13,
    totalBags: 65,
    quantityStatus: "Good",
  },
  {
    id: 4,
    name: "FoodHybrid Yam Flour",
    image: yamFlourImage,
    pricePerUnit: "£50",
    bagsPerUnit: "5 bags",
    unitsAvailable: 3,
    totalBags: 15,
    quantityStatus: "Low",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="bg-white text-sm overflow-hidden font-satoshi">
      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto text-nowrap">
          <thead>
            <tr className="text-[16px] text-[#6E6E6E] bg-[#F9F9F9] font-medium">
              <th className="px-4 py-2 text-center">Product</th>
              <th className="px-4 py-2 text-center">Price per unit</th>
              <th className="px-4 py-2 text-center">Bags per unit</th>
              <th className="px-4 py-2 text-center">Units available</th>
              <th className="px-4 py-2 text-center">Quantity status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-[#F0F0F0]">
                {/* Product */}
                <td className="px-4 py-3">
                  <Link to={`/admin/profile/manage-products/${product.id}`} className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[48px] h-[48px] rounded object-cover"
                    />
                    <span className="text-[16px] font-bold">{product.name}</span>
                  </Link>
                </td>

                {/* Price per unit */}
                <td className="px-4 py-3 text-center text-[16px] font-bold">
                  {product.pricePerUnit}
                </td>

                {/* Bags per unit */}
                <td className="px-4 py-3 text-center text-[16px] font-bold">
                  {product.bagsPerUnit}
                </td>

                {/* Units available */}
                <td className="px-4 py-3 text-[16px] text-center font-bold">
                  {product.unitsAvailable} units ({product.totalBags} bags)
                </td>

                {/* Quantity status */}
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-[4px] text-[14px] font-medium ${
                      quantityStatusStyles[product.quantityStatus]?.bg || "bg-gray-100"
                    } ${
                      quantityStatusStyles[product.quantityStatus]?.text || "text-gray-500"
                    }`}
                  >
                    {product.quantityStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList; 