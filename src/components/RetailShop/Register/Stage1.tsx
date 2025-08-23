// components/RetailShop/Register/Stage1.tsx
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

const schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
});

type FormData = z.infer<typeof schema>;

const Stage1: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { updateUserData } = usePartnerSignupStore();

  const onSubmit = (values: FormData) => {
    updateUserData(values);
    navigate("/retail-shop/register?stage=2");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <h2 className="text-center font-[700] text-[#3C4741] text-[20px] md:text-[28px]">We'd like to know your name</h2>
        
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">First Name</FormLabel>
              <input {...field} placeholder="John" className="auth-input" />
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Last Name</FormLabel>
              <input {...field} placeholder="Doe" className="auth-input" />
              <FormMessage />
            </FormItem>
          )}
        />



        <Button
          type="submit"
          disabled={!form.formState.isDirty || !form.formState.isValid}
          className="disabled:bg-[#15221B]/50 w-full"
        >
          Next
        </Button>

        <h2 className="flex gap-1 justify-center font-satoshi text-[#6E6E6E] font-[500] text-center text-[16px]">
          Already have an account?
          <Link to="/retail-shop/login" className="text-[#15221B] underline">Sign in</Link>
        </h2>
      </form>
    </Form>
  );
};

export default Stage1;
