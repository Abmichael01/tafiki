import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import garri from "@/assets/images/garriProduct.webp";
import { cn } from "@/lib/utils";

interface Props {
  transactionsPage?: boolean;
  products: string[];
}

const Products: React.FC<Props> = ({ transactionsPage, products }) => {
  const {id} = useParams()
  
  return (
    <div className="space-y-[20px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] font-[600] text-[#494949]">Products</h1>
        {!transactionsPage && (
          <Link
            to={`/admin/orders/${id}/transactions`}
            className="flex gap-2 items-center text-[16px] font-[500] font-satoshi text-[#15221B]"
          >
            View RI flow
            <FiChevronRight />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {products?.map((product, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-[20px] items-center  pr-[20px]"
              // index !== products.length -1 && "border-r"
            )}
          >
            <img src={garri} alt="" className="w-[130px]" />
            <div className="space-y-[8px] font-satoshi">
              <h1 className="text-[18px] font-[500] text-[#494949]">
                {product}
              </h1>
              <p className="font-[900] text-[14px]">${product}</p>
              {/* <p className="text-[14px] font-[500] text-[#6E6E6E]">
                {Math.floor(order_amount / Number(product.price))} units (
                {Math.floor(
                  (order_amount / Number(product.price)) *
                    Number(product.quantity_per_unit)
                )}{" "}
                bags)
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
