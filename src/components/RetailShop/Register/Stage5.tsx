// components/RetailShop/Register/Stage5.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import usePartnerSignupStore from "@/stores/partnerSingupStore";
import { useMutation } from "@tanstack/react-query";
import { PartnerSignupData } from "@/types";
import { partnerSignup } from "@/api/apiEndpoints";
import { toast } from "sonner";
import errorMessage from "@/lib/errorMessage";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  store_name: z.string().min(1, "Store name is required"),
  store_address: z.string().min(1, "Store address is required"),
  store_email: z.string().email("Enter a valid store email address"),
});

type FormData = z.infer<typeof schema>;

const Stage5: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { updateUserData, userData } = usePartnerSignupStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Partial<PartnerSignupData>) => partnerSignup(data, { method: "PATCH" }),
    onSuccess: () => {
      toast.success("Store account created successfully!");
      navigate("/retail-shop/register?success=true");
    },
    onError: (error: Error) => {
      toast.error(errorMessage(error));
      console.log(error);
    }
  });

  const onSubmit = (values: FormData) => {
    console.log("Final Registration Data:", {
      username: values.username,
      password: userData.password,
      user_type: "vendor",
      email: userData.email,
      store_email: values.store_email,
      phone_number: values.phone_number,
      store_name: values.store_name,
      store_address: values.store_address,
    });
    updateUserData(values);
    mutate({
      email: userData.email,
      store_email: values.store_email,
      username: values.username,
      password: userData.password,
      phone_number: values.phone_number,
      store_name: values.store_name,
      store_address: values.store_address,
      user_type: "vendor",
    } as Partial<PartnerSignupData & { 
      user_type: string;
      store_email: string;
      store_name: string;
      store_address: string;
    }>);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <h2 className="text-center font-[700] text-[#3C4741] text-[20px] md:text-[28px]">
          Complete your store details
        </h2>
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Username</FormLabel>
              <input {...field} placeholder="mystorename123" className="auth-input" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Phone Number</FormLabel>
              <input {...field} placeholder="+1234567890" className="auth-input" type="tel" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="store_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Store Name</FormLabel>
              <input {...field} placeholder="Your Store Name" className="auth-input" />
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="store_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Store Address</FormLabel>
              <input {...field} placeholder="123 Main Street, City, State" className="auth-input" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="store_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Store Email</FormLabel>
              <input {...field} placeholder="store@example.com" className="auth-input" type="email" />
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          disabled={!form.formState.isDirty || isPending}
          className="disabled:bg-[#15221B]/50 w-full"
        >
          {isPending ? "Creating Account..." : "Finish"}
        </Button>

        <h2 className="flex gap-1 justify-center font-satoshi text-[#6E6E6E] font-[500] text-center text-[16px]">
          Already have an account?
          <Link to="/retail-shop/login" className="text-[#15221B] underline">Sign in</Link>
        </h2>
      </form>
    </Form>
  );
};

export default Stage5;
