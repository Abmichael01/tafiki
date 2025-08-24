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
import useProductStore, { ProductData } from "@/stores/productStore";
import { productDetailsSchema, productDetailsFields } from "./formSchemas";
import ProductImages from "../ImageSelector";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ProductDetailsForm() {
  const { productData, updateProductData } = useProductStore();
  const navigate = useNavigate() 
  const [params] = useSearchParams()
  const mode = params.get("mode")

  const form = useForm({
    resolver: zodResolver(productDetailsSchema), 
    defaultValues: {
      company_name: productData.company_name || "",
      name: productData.name || "",
      description: productData.description || "",
    },
  });

  const onSubmit = (data: Partial<ProductData>) => {
    updateProductData(data);
    navigate(`?dialog=upload-product&current=product-specs&mode=${mode}`)
    console.log("Product Details:", productData);
  };

  return (
    <div className="space-y-[10px]">
      <Header title={mode === "edit" ? "Edit Product" : "New Product"} description="Fill in details of the product" />

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-3 gap-5 scale-[0.7] w-full max-w-[80%]">
          <ProductImages />
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-[20px] px-[20px]"
        >
          {productDetailsFields.map((field) => (
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
                    {field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        rows={field.rows}
                        className="w-full p-[12px] bg-[#F9F9F9] px-[20px] py-[14px] rounded-[4px] text-[14px] placeholder:text-[#999] focus:outline-none focus:border-primary resize-none"
                        {...formField}
                      />
                    ) : (
                      <input
                        placeholder={field.placeholder}
                        className="w-full p-[12px] bg-[#F9F9F9] px-[20px] py-[14px] rounded-[4px] text-[14px] placeholder:text-[#999] focus:outline-none focus:border-primary resize-none"
                        {...formField}
                      />
                    )}
                  </FormControl>
                  <FormMessage className="text-[12px] text-red-500" />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            className="w-full bg-[#15221B] text-white py-[16px] rounded-[8px] font-[500] text-[16px] hover:bg-[#15221B]/90 transition-colors"
          >
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
}
