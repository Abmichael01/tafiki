// components/Register/Stage5.tsx
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
});

type FormData = z.infer<typeof schema>;

const Stage5: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { updateUserData, userData, resetUserData } = usePartnerSignupStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Partial<PartnerSignupData>) => partnerSignup(data, { method: "PATCH" }),
    onSuccess: () => {
      toast.success("Account created successfully!");
      navigate("/partner/login");
      resetUserData();
    },
    onError: (error: Error) => {
      toast.error(errorMessage(error))
      console.log(error)
    }
  })

  const onSubmit = (values: FormData) => {
    console.log("Final Registration Data:", {
      username: values.username,
      password: userData.password
    });
    updateUserData(values);
    mutate({
      email: userData.email,
      username: values.username,
      password: userData.password,
    });
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <h2 className="text-center font-[700] text-[#3C4741] text-[20px] md:text-[28px]">Create a unique username</h2>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Username</FormLabel>
              <input {...field} placeholder="johndoe12" className="auth-input" />
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
          <Link to="/partner/login" className="text-[#15221B] underline">Signin</Link>
        </h2>
      </form>
    </Form>
  );
};

export default Stage5;