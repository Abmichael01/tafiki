import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Header from "../Header";
import { Button } from "@/components/ui/button";
import ProductImages from "../ImageSelector";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "@/api/adminEndpoints";
import useProductStore from "@/stores/productStore";

const formSchema = z.object({
  quantity: z
    .string()
    .min(1, "Quantity is required")
    .refine((val) => /^\d+$/.test(val), {
      message: "Must be a number",
    }),
});

export default function RestockProduct() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: "",
    },
  });
  const navigate = useNavigate()
  const { productData } = useProductStore()

  const { mutate, isPending } = useMutation<unknown, unknown, { id: number; quantity: string }>({
    mutationFn: ({ id, quantity }) => updateProduct(id, quantity),
    onSuccess: () => {
      navigate(`?dialog=upload-product&current=success&title=Product Restocked&description=${productData.name} has successfully been restocked!`)
    }
  })

  const quantity = form.watch("quantity");
  const bagsPerUnit = 5;
  const units = parseInt(quantity, 10);
  const isValidNumber = !isNaN(units) && units > 0;
  const totalBags = isValidNumber ? units * bagsPerUnit : 0;

  const handleSubmit = (values: { quantity: string }) => {
    mutate({ id: productData.id as number, quantity: values.quantity })
  };



  return (
    <div className="">
      <Header title="Restock Product" />

      <div className="p-4 space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-[24px]">
            {/* Product Name */}
            <div className="text-center">
              <h2 className="text-[14px] font-[600] text-[#252525]">
                Food Hybrid Rice
              </h2>
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-3 gap-5 scale-[0.7] w-full max-w-[80%]">
                  <ProductImages />
                </div>
              </div>
            </div>

            {/* Quantity Input */}
            <div className="space-y-2">
              <label className="text-[14px] font-[500] text-gray-700 ">
                Quantity{" "}
                <span className="text-gray-400 font-[400] text-[12px]">
                  (Number of units to be uploaded)
                </span>
              </label>
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative flex gap-[8px]">
                      <FormControl>
                        <input
                          placeholder="1 - 20"
                          className="w-full bg-[#F9F9F9] px-[20px] py-[14px] rounded-[4px] text-[14px] placeholder:text-[#999] focus:outline-none focus:border-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <div className="bg-[#F9F9F9] px-[20px] py-[14px] rounded-[4px] text-[14px]">
                        <span className="text-[#6E6E6E] text-sm font-satoshi font-[700]">
                          Unit(s)
                        </span>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Helper text */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>
                  {isValidNumber
                    ? `${units} unit(s) = ${totalBags} bags`
                    : `– unit(s) = — bags`}
                </span>
                <span>1 unit = {bagsPerUnit} bags</span>
              </div>
            </div>

            {/* Restock Button */}
            <Button
              type="submit"
              className="w-full rounded-[8px]"
              disabled={!form.formState.isValid || isPending}
            >
              {isPending ? 'Restocking...' : 'Restock'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
