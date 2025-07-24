import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Header from "./../Header";
import clsx from "clsx";
import useProductStore, { ProductData } from "@/stores/productStore";
import { productSpecsSchema, productSpecsFields } from "./formSchemas";
import ImageSelector from "../ImageSelector";
import { useNavigate } from "react-router-dom";

export default function ProductSpecsForm() {
  const { productData, updateProductData } = useProductStore();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(productSpecsSchema),
    defaultValues: {
      productWeight: productData.productWeight || "",
      bagsPerUnit: productData.bagsPerUnit || 1,
      pricePerUnit: productData.pricePerUnit || "",
      quantity: productData.quantity || "",
    },
  });

  const onSubmit = (data: Partial<ProductData>) => {
    updateProductData(data);
    navigate('?dialog=upload-product&current=success&title=New Product Added&description=Food Hybrid Beans has successfully been added!')
    console.log("Product Specs:", data);
  };

  return (
    <div className="space-y-[24px]">
      <Header title="New Product" />
      <h2 className="text-[12px] text-center font-[500]">
        Fill in details of new product
      </h2>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-3 gap-5 scale-[0.7] w-full max-w-[80%]">
          <ImageSelector />
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-[20px] px-[20px]"
        >
          {productSpecsFields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem className="">
                  <FormLabel className="text-[14px] font-[500] text-[#6E6E6E]">
                    {field.label}
                  </FormLabel>
                  <FormControl>
                    <div className="relative flex gap-[12px]">
                      <input
                        placeholder={field.placeholder}
                        type={field.type === "number" ? "number" : "text"}
                        className={clsx(
                          "w-full p-[12px] bg-[#F9F9F9] px-[20px] py-[14px] rounded-[4px] text-[14px] placeholder:text-[#999] focus:outline-none focus:border-primary resize-none"
                        )}
                        {...formField}
                        value={
                          field.type === "number"
                            ? formField.value || ""
                            : formField.value
                        }
                        onChange={(e) => {
                          const value =
                            field.type === "number"
                              ? e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                              : e.target.value;
                          formField.onChange(value);
                        }}
                      />
                      <div className="w-fit bg-[#F9F9F9] px-[20px] py-[14px] rounded-[4px] text-[14px] placeholder:text-[#999] focus:outline-none focus:border-primary resize-none">
                        {field.suffix}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[12px] text-red-500" />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            className="w-full text-white py-[16px] rounded-[8px] font-[500] text-[16px] "
          >
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
}
