import yamFlourImage from "@/assets/images/yamFlour.webp";
import { Link } from "react-router-dom";
import { ShopProduct } from "@/types";

// Quantity status badge color mapping
// const quantityStatusStyles: Record<string, { bg: string; text: string }> = {
//   Good: {
//     bg: "bg-green-100",
//     text: "text-green-600",
//   },
//   Average: {
//     bg: "bg-yellow-100",
//     text: "text-yellow-600",
//   },
//   Low: {
//     bg: "bg-red-100",
//     text: "text-red-600",
//   },
// };

interface Props {
  data: ShopProduct[];
}

function ProductList({ data }: Props) {
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
            {data?.map((product) => (
              <tr key={product.id} className="border-b border-[#F0F0F0]">
                {/* Product */}
                <td className="px-4 py-3">
                  <Link
                    to={`/admin/profile/manage-products/${product.product_id}`}
                    className="flex items-center gap-3 mr-10"
                  >
                    <img
                      src={yamFlourImage}
                      alt={product.name}
                      className="w-[48px] h-[48px] rounded object-cover"
                    />
                    <span className="text-[16px] font-bold">
                      {product.name}
                    </span>
                  </Link>
                </td>

                {/* Price per unit */}
                <td className="px-4 py-3 text-center text-[16px] font-bold">
                  £{product.price}
                </td>

                {/* Bags per unit */}
                <td className="px-4 py-3 text-center text-[16px] font-bold">
                  {product.quantity_per_unit}
                </td>

                {/* Units available */}
                <td className="px-4 py-3 text-[16px] text-center font-bold">
                  {product.stock_quantity} units ({product.quantity_per_unit}{" "}
                  bags)
                </td>

                {/* Quantity status */}
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-[4px] text-[14px] font-medium`}
                  >
                    {Number(product.stock_quantity) < 10 ? "Low" : "Good"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
