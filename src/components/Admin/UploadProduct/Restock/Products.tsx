import Header from "../Header";
import rice from "@/assets/images/rice.webp";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShopProducts } from "@/api/apiEndpoints";
import useProductStore, { ProductData } from "@/stores/productStore";


export default function Products() {
  const { updateProductData } = useProductStore()
  // Fetch real products from API
  const { data: products = [] } = useQuery({
    queryKey: ["shopItems"],
    queryFn: getShopProducts,
  });

  console.log(products)

  const formatPrice = (price: string) => {
    const n = Number(price);
    if (Number.isNaN(n)) return price;
    return n.toLocaleString();
  };

  const getStatusColor = (status: string) => {
    return status === "Low"
      ? "text-[#B52217] bg-[#B522171A]"
      : status === "average"
      ? "text-[#FFD60A] bg-[#FFD60A1A]"
      : "text-[#16A34A] bg-[#16A34A1A]";
  };

  const getStatusByStock = (stock: number) => {
    if (stock <= 5) return "Low";
    if (stock <= 10) return "average";
    return "Good";
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
            <span className="text-sm font-medium text-gray-700">
              Units left
            </span>
          </div>

          {/* Product Rows */}
          <div className="divide-y divide-gray-100">
            {products?.map((product) => {
              const units = Math.round( Number(product.stock_quantity) / Number(product.quantity_per_unit))
              const bags = Number(product.stock_quantity) || 0;
              const status = getStatusByStock(units as number);

              return (
                <Link
                  to="?dialog=upload-product&current=restock-product"
                  key={product.id}
                  className="flex items-center justify-between p-[8px] hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    updateProductData(product as ProductData)
                  }}
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-[8px]">
                    <img src={rice} alt="product-image" className="w-[47px]" />
                    <div className="space-y-[8px]">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500">£{formatPrice(product.price)} per unit</p>
                    </div>
                  </div>

                  {/* Units Info */}
                  <div className="flex flex-col items-end gap-[8px]">
                    <p className="text-sm text-gray-900">
                      {units} units ({bags} bags)
                    </p>
                    <p
                      className={`text-xs font-medium w-fit px-[8px] py-[2px] ${getStatusColor(
                        status
                      )}`}
                    >
                      {status}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
