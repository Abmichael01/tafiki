import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form as FormRoot, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

const remitFormSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
});

type RemitFormData = z.infer<typeof remitFormSchema>;

export default function Form() {
  const navigate = useNavigate();
  const form = useForm<RemitFormData>({
    resolver: zodResolver(remitFormSchema),
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = (data: RemitFormData) => {
    console.log(data);
    navigate("/retail-shop/remittance?current=2");
  };

  return (
    <FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-8 w-full max-w-md mx-auto"
      >
        <h1 className="text-3xl font-semibold text-center mb-2">Remittance</h1>
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="block text-sm font-medium text-[#6E6E6E] mb-1">
                Amount
              </FormLabel>
              <FormControl>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="Enter amount"
                  className={`w-full px-4 py-3 rounded border border-[#15221B33] bg-[#F5F5F5] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#15221B33] focus:border-transparent placeholder:font-satoshi placeholder:text-[#B6B6B6]`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#15221B] text-white py-3 rounded-sm font-medium"
          disabled={!form.formState.isDirty}
        >
          Remit
        </Button>

        <a
          href="#"
          className="text-sm text-[#6E6E6E] underline text-center block mt-2"
        >
          View history
        </a>
      </form>
    </FormRoot>
  );
}
