// components/Register/Stage2.tsx
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
import { useMutation } from "@tanstack/react-query";
import { partnerSignup } from "@/api/apiEndpoints";
import { PartnerSignupData } from "@/types";
import usePartnerSignupStore from "@/stores/partnerSingupStore";
import { toast } from "sonner";
import errorMessage from "@/lib/errorMessage";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

const Stage2: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { updateUserData } = usePartnerSignupStore()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Partial<PartnerSignupData>) => partnerSignup(data, { method: "POST" }),
    onSuccess: () => {
      navigate("/partner/register?stage=3");
    },
    onError: (error: Error) => {
      toast.error(errorMessage(error))
      console.log(error)
    }
  })

  const onSubmit = (values: FormData) => {
    console.log("Submitted Stage 2:", values);
    updateUserData(values);
    mutate(values)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <h2 className="text-center font-[700] text-[#3C4741] text-[28px]">Let’s get your email</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Email</FormLabel>
              <input {...field} placeholder="you@example.com" className="auth-input" />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isDirty || isPending}
          className="disabled:bg-[#15221B]/50 w-full"
        >
          { isPending ? "Please wait..." : "Next"}
        </Button>

        <h2 className="flex gap-1 justify-center font-satoshi text-[#6E6E6E] font-[500] text-center text-[16px]">
          Already have an account?
          <Link to="/partner/login" className="text-[#15221B] underline">Signin</Link>
        </h2>
      </form>
    </Form>
  );
};

export default Stage2;