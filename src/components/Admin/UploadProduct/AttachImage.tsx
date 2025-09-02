import Header from "./Header";
import ImageSelector from "./ImageSelector";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useProductStore from "@/stores/productStore";

export default function AttachImage() {
  const { productData } = useProductStore();
  const { images } = productData;

  const canProceed = images.length > 0;

  return (
    <div className="space-y-[24px]">
      <Header title="New Product" />
      <h2 className="text-[12px] text-center font-[500]">
        Attach Product Images
      </h2>

      <ImageSelector />

      <Link 
        to={canProceed ? "?dialog=upload-product&current=product-details" : "#"} 
        className="w-full"
      >
        <Button 
          className="w-full" 
          disabled={!canProceed}
        >
          Next
        </Button>
      </Link>
    </div>
  );
}
