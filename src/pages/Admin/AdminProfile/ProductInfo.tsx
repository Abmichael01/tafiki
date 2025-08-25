import { FiTrash2, FiRotateCw } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTitle from "@/components/ui/PageTitle";
import { ChevronLeft, ChevronRight, Edit3 } from "lucide-react";
import DeleteProduct from "@/components/Admin/AdminProfile/DeleteProduct";
import { getShopProduct } from "@/api/apiEndpoints";
import { useQuery } from "@tanstack/react-query";
import LoadingData from "@/components/Admin/LoadingData";
import { ShopProduct } from "@/types";
import { cn } from "@/lib/utils";
import useProductStore, { ProductData } from "@/stores/productStore";

export default function ProductInfo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const { updateProductData } = useProductStore();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getShopProduct(id as string),
  });

  useEffect(() => {
    updateProductData(data as ProductData);
  }, [data, updateProductData]);

  console.log(data);

  const product = data as ShopProduct;

  // Mock product data with multiple images

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % Number(product?.images?.length)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + Number(product?.images?.length)) %
        Number(product?.images?.length)
    );
  };

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-5">
      {/* Header */}
      <PageTitle
        title="Product Info"
        showBack={true}
        backLink="/admin/profile/manage-products"
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[30px]">
        {/* Product Images Section */}
        <div className="">
          {/* Main Image with Navigation */}
          <div className="relative mb-4 flex items-center gap-2 p-2">
            <button
              title="Previous Image"
              type="button"
              onClick={prevImage}
              className=" bg-white p-2 rounded-full hover:shadow-md cursor-pointer"
            >
              <ChevronLeft className="size-5 text-gray-700" />
            </button>
            {(product?.images as string[]) ? (
              <img
                src={(product?.images as string[])[currentImageIndex]}
                alt={product?.name}
                className="size-[173px] object-contain rounded-lg"
              />
            ) : (
              <div className="size-[173px] rounded-xl bg-[#f9f9f9]" />
            )}
            <button
              title="Next Image"
              type="button"
              onClick={nextImage}
              className=" bg-white p-2 rounded-full hover:shadow-md cursor-pointer"
            >
              <ChevronRight className="size-5 text-gray-700" />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 justify-center">
            {product?.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-14 h-14 p-2 rounded-[5px] overflow-hidden border ${
                  index === currentImageIndex
                    ? "border-primary"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className=" flex flex-col justify-start">
          <h2 className="text-[24px] font-semibold mb-4">{product.name}</h2>

          <div className="space-y-3 text-[15px] mb-6">
            <div>
              <span className="text-gray-500">Price:</span>{" "}
              <span className="font-medium">{product.price}</span>
            </div>
            <div>
              <span className="text-gray-500">Bags per unit:</span>{" "}
              <span className="font-medium">{product.quantity_per_unit}</span>
            </div>
            <div>
              <span className="text-gray-500">Units available:</span>{" "}
              <span className="font-medium">
                {product.stock_quantity} units (
                {Number(product.quantity_per_unit) *
                  Number(product.stock_quantity)}{" "}
                Bags)
              </span>
            </div>
            <div>
              <span className="text-gray-500">Quantity status:</span>{" "}
              <span
                className={cn(
                  `inline-block px-3 py-1 rounded-[4px] text-[14px] font-medium`,
                  Number(product.stock_quantity) < 10
                    ? "bg-red-100 text-red-600"
                    : Number(product.stock_quantity) < 20
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                )}
              >
                {Number(product.stock_quantity) < 10
                  ? "Low"
                  : Number(product.stock_quantity) < 20
                  ? "Average"
                  : "Good"}
              </span>
            </div>
          </div>

          <Link
            to="?dialog=upload-product&current=restock-product"
            className="flex items-center justify-center gap-2 bg-[#15221B] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#15221B]/90 transition-colors mb-8"
            onClick={() => updateProductData(data as ProductData)}
          >
            <FiRotateCw className="size-5" />
            Restock
          </Link>
        </div>
        <div className="flex justify-end items-start">
          <div className="flex items-center gap-3">
            <Link
              to="?dialog=upload-product&current=product-details&mode=edit"
              className="flex items-center gap-1 text-primary rounded-full hover:text-primary text-[15px] px-3 py-2 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              onClick={() => updateProductData(data as ProductData)}
            >
              <Edit3 className="size-4" />
              <span className="inline">Edit product</span>
            </Link>
            <Link
              to="?dialog=delete-product"
              className="px-3 py-2 rounded bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-300 cursor-pointer"
            >
              <FiTrash2 className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Product Section */}
      <div className="mt-8 grid grid-cols-3">
        <div className="col-span-2 space-y-[8px]">
          <h3 className="text-[14px] text-[#929292] font-semibold">
            About Product
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed font-satoshi ">
            {product.description}
          </p>
        </div>
      </div>
      <DeleteProduct />
    </div>
  );
}
