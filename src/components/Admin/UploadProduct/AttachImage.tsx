import { Plus } from "lucide-react";
import Header from "./Header";
import ImageSelector from "./ImageSelector";
import { Button } from "@/components/ui/button"; // if you're using ShadCN UI
import { Link } from "react-router-dom";

export default function AttachImage() {
  return (
    <div className="space-y-[24px]">
      <Header title="New Product" />
      <h2 className="text-[12px] text-center font-[500]">
        Attach Product Image
      </h2>

      <div className="grid grid-cols-4 justify-center gap-[12px]">
        <ImageSelector />

        <div className="h-[100px] bg-[#F9F9F9] rounded-[8px] flex items-center justify-center cursor-pointer">
          <div className="p-[2px] bg-[#F0F0F0] rounded-full">
            <Plus className="font-[600] size-[20px]" />
          </div>
        </div>
      </div>

      <Link to="?dialog=upload-product&current=product-details" className="w-full">
        <Button className="w-full">
          Next
        </Button>
      </Link>
    </div>
  );
}
