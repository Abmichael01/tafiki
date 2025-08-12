import PageTitle from "@/components/ui/PageTitle";
import orderBox from "@/assets/svgs/orderBox.svg";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductList from "@/components/Admin/AdminProfile/ProductList";
import { useQuery } from "@tanstack/react-query";
import { getShopProducts } from "@/api/apiEndpoints";
import LoadingData from "@/components/Admin/LoadingData";

export default function ManageProducts() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["shopItems"],
    queryFn: getShopProducts,
  });

  console.log(products);
  if(isLoading) return <LoadingData />
  return (
    <div className="space-y-5">
      <PageTitle title="Manage Products" showBack={true} />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[4px]">
          <div className="bg-primary/5 p-[8px] rounded-full">
            <img src={orderBox} alt="" className="size-[14px]" />
          </div>
          <p className="text-[16px] font-medium font-satoshi">
            Total Products: <span className="text-primary">10</span>
          </p>
        </div>
        <Link
          to="?dialog=upload-product&current=new-product"
          className="bg-[#15221B0A] text-primary px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-2"
        >
          <FiPlus />
          Add new product
        </Link>
      </div>
      <ProductList data={products} />
    </div>
  );
}
