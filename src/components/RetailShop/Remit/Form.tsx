import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form as FormRoot, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { initiateRemittance } from "@/api/apiEndpoints";
import { toast } from "sonner";
import { Toast } from "@/components/Admin/Toast";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import errorMessage from "@/lib/errorMessage";

interface RemittanceResponse {
  message: string;
  remittance: {
    amount: string;
    created_at: string;
    reference: string;
    status: string;
  };
}

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

  const remittanceMutation = useMutation({
    mutationFn: (data: { amount: string }) => initiateRemittance(data),
    onSuccess: (data: RemittanceResponse, variables) => {
      console.log(data);
      toast.custom(() => (
        <Toast text="OTP sent successfully" icon={<HiMiniBuildingStorefront />} />
      ));
      navigate(`/retail-shop/remittance?current=2&amount=${variables.amount}&reference=${data.remittance.reference}`);
    },
    onError: (error: Error) => {
      toast.custom(() => (
        <Toast
          text={errorMessage(error)}
          decline
          icon={<HiMiniBuildingStorefront />}
        />
      ));
    },
  });

  const onSubmit = (data: RemitFormData) => {
    remittanceMutation.mutate({ amount: data.amount });
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
          disabled={!form.formState.isDirty || remittanceMutation.isPending}
        >
          {remittanceMutation.isPending ? "Processing..." : "Remit"}
        </Button>

        <Link
          to="/retail-shop/transactions"
          className="text-sm text-[#6E6E6E] underline text-center block mt-2"
        >
          View history
        </Link>
      </form>
    </FormRoot>
  );
}
