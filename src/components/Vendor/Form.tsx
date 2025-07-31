import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form as FormRoot, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";

const deliveryFormSchema = z.object({
  ownerName: z.string().min(1, "Owner's name is required"),
  ownerEmail: z.string().email("Invalid email address"),
  storeName: z.string().min(1, "Store name is required"),
  storeEmail: z.string().email("Invalid email address"),
  storePhone: z.string().min(1, "Store phone is required"),
  storeAddress: z.string().min(1, "Store address is required"),
});

type DeliveryFormData = z.infer<typeof deliveryFormSchema>;

interface FormField {
  id: keyof DeliveryFormData;
  label: string;
  placeholder: string;
  type: string;
}


export default function Form() {
    const navigate = useNavigate();
  const form = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormSchema),
    defaultValues: {
      ownerName: "",
      ownerEmail: "",
      storeName: "",
      storeEmail: "",
      storePhone: "",
      storeAddress: "",
    },
  });

  const formFields: FormField[] = [
    {
      id: "ownerName",
      label: "Owner's Name",
      placeholder: "Enter personal name",
      type: "text",
    },
    {
      id: "ownerEmail",
      label: "Owner's email address",
      placeholder: "e.g johndoe@email.com",
      type: "email",
    },
    {
      id: "storeName",
      label: "Store Name",
      placeholder: "Enter name of store",
      type: "text",
    },
    {
      id: "storeEmail",
      label: "Store Email address",
      placeholder: "e.g kapacventures@email.com",
      type: "email",
    },
    {
      id: "storePhone",
      label: "Store Phone",
      placeholder: "Enter phone number",
      type: "tel",
    },
    {
      id: "storeAddress",
      label: "Store Address",
      placeholder: "Enter location of store",
      type: "text",
    },
  ];

  const onSubmit = (data: DeliveryFormData) => {
    console.log(data);
    navigate("/vendor/delivery-form?current=2");
  }

  return (
    <FormRoot {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formFields.map((field) => (
          <FormField
            key={field.id}
            control={form.control}
            name={field.id}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-[#6E6E6E]">
                  {field.label}
                </FormLabel>
                <FormControl>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#15221B33] focus:border-transparent placeholder:font-satoshi placeholder:text-[#B6B6B6] ${
                      formField.value ? 'bg-white border border-[#15221B33]' : 'bg-[#F5F5F5]'
                    }`}
                    {...formField}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full text-white py-3 px-4 rounded-lg font-medium mt-6"
          disabled={!form.formState.isDirty}
        >
          Submit
        </Button>
              </form>
      </FormRoot>
  );
}
