import { GlobalDialog } from "@/components/ui/CustomDialog";
import { DialogContent } from "@/components/ui/dialog";
import { useSearchParams } from "react-router-dom";
import Landing from "./Landing";
import AttachImage from "./AttachImage";
import ProductDetailsForm from "./Form/ProductDetailsForm";
import ProductSpecsForm from "./Form/ProductSpecsForm";
import Success from "./Success";
import Products from "./Restock/Products";
import RestockProduct from "./Restock/RestockProduct";

export default function UploadProduct() {
  const [params] = useSearchParams();
  const current = params.get("current") || "landing";

  return (
    <div>
      <GlobalDialog dialogName="upload-product">
        <DialogContent className="max-h-[90vh] w-full overflow-hidden">
          <div
            className="
              h-full max-h-[80vh] overflow-y-scroll
              scrollbar-thin scrollbar-thumb-gray-400
              scrollbar-thumb-rounded-md
              hover:scrollbar-thumb-gray-500
              [&::-webkit-scrollbar]:w-1
              [&::-webkit-scrollbar]:opacity-0
              hover:[&::-webkit-scrollbar]:opacity-[1]
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-neutral-400
            "
          >
            {current === "landing" && <Landing />}
            {current === "new-product" && <AttachImage />}
            {current === "product-details" && <ProductDetailsForm />}
            {current === "product-specs" && <ProductSpecsForm />}
            {current === "success" && <Success />}
            {current === "products" && <Products />}
            {current === "restock-product" && <RestockProduct />}
          </div>
        </DialogContent>
      </GlobalDialog>
    </div>
  );
}
