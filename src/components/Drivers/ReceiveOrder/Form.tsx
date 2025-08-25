import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form as FormRoot, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { initiateDelivery } from "@/api/apiEndpoints";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import errorMessage from "@/lib/errorMessage";

const orderIdSchema = z.object({
  order_id: z.string().min(1, "Order ID is required"),
});

type OrderIdFormData = z.infer<typeof orderIdSchema>;

export default function Form() {
  const navigate = useNavigate();
  
  const form = useForm<OrderIdFormData>({
    resolver: zodResolver(orderIdSchema),
    defaultValues: {
      order_id: "",
    },
  });

  const initiateDeliveryMutation = useMutation({
    mutationFn: (data: { order_id: string }) => initiateDelivery(data),
    onSuccess: (response, variables) => {
      console.log("Delivery initiated:", response);
      // Navigate to OTP confirmation step with order_id
      navigate(`/drivers/delivery-form?current=2&order_id=${variables.order_id}`);
    },
    onError: (error: Error) => {
      toast.error(errorMessage(error));
    },
  });

  const onSubmit = (data: OrderIdFormData) => {
    console.log("Submitting Order ID:", data.order_id);
    initiateDeliveryMutation.mutate({ order_id: data.order_id });
  }

  return (
    <FormRoot {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="order_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-[#6E6E6E]">
                Order ID
              </FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Enter order ID"
                  className={`w-full px-4 py-3 rounded focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#15221B33] focus:border-transparent placeholder:font-satoshi placeholder:text-[#B6B6B6] ${
                    field.value ? 'bg-white border border-[#15221B33]' : 'bg-[#F5F5F5]'
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Error Display */}
        {initiateDeliveryMutation.isError && (
          <div className="text-red-500 text-sm mt-2">
            Failed to initiate delivery. Please try again.
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full text-white py-3 px-4 rounded-lg font-medium mt-6"
          disabled={!form.formState.isDirty || initiateDeliveryMutation.isPending}
        >
          {initiateDeliveryMutation.isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </FormRoot>
  );
}
