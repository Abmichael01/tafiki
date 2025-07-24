import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { LuRotateCcw } from "react-icons/lu";
import Header from "./Header";

export default function Landing() {
  return (
    <div className="space-y-8 ">
      <Header title="Upload Product" />
      <div className="space-y-[24px]">
        <Link
          to="?dialog=upload-product&current=new-product"
          className="bg-[#15221B1A] py-[14px] font-[600] text-[16px] flex gap-[8px] justify-center items-center text-center rounded-[8px] font-[16px] [&_svg]:text-fit"
        >
          <Plus className="font-[600] size-[20px]" />
          Add a new product
        </Link>
        <Link
          to="?dialog=upload-product&current=products"
          className="bg-[#15221B1A] py-[14px] font-[600] text-[16px] flex gap-[8px] justify-center items-center text-center rounded-[8px] font-[16px] [&_svg]:text-fit"
        >
          <LuRotateCcw className="font-[500] size-[20px]" />
          Restock existing products
        </Link>
      </div>
    </div>
  );
}
