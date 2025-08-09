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
        <DialogContent
          className="max-h-[80vh] w-full overflow-hidden fancy-scrollbar
             overflow-y-auto"
        >
          <div
            className="
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
