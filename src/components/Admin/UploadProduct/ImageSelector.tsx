import clsx from "clsx";
import useProductStore from "@/stores/productStore";
import { X } from "lucide-react";

export default function ProductImages() {
  const { productData, removeImage } = useProductStore();
  const { images } = productData;

  const handleRemoveImage = (index: number) => {
    removeImage(index);
  };

  return (
    <>
      {images?.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "p-[18px] w-fit border rounded-[8px] flex items-center justify-center cursor-pointer relative",
            "border-primary border-2"
          )}
        >
          <img
            src={image}
            className="size-[76.5px] object-cover rounded-[6px]"
            alt={`product-img-${index}`}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveImage(index);
            }}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
    </>
  );
}
