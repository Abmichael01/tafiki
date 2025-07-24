import garri from "@/assets/images/garriProduct.webp";
import clsx from "clsx";
import useProductStore from "@/stores/productStore";

export default function ImageSelector() {
  const { productData, updateProductData } = useProductStore();
  const { selectedImageId } = productData;

  const handleSelect = (index: number) => {
    const imageId = `image_${index}`;
    updateProductData({ selectedImageId: imageId });
  };

  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => {
        const imageId = `image_${index}`;
        const isSelected = selectedImageId === imageId;

        return (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={clsx(
              "p-[18px] w-fit border rounded-[8px] flex items-center justify-center cursor-pointer",
              isSelected ? "border-primary border-2" : "border-[#15221B99]"
            )}
          >
            <img
              src={garri}
              className="size-[76.5px] object-cover rounded-[6px]"
              alt="garri-img"
            />
          </div>
        );
      })}
    </>
  );
}
