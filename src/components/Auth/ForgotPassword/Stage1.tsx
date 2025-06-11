// components/ForgotPassword/Stage1.tsx
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PageTitle from "@/components/Auth/PageTitle";
import { forgotPassword } from "@/api/apiEndpoints";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

const Stage1: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { email: string }) => forgotPassword(data),
    onSuccess: () => {
      toast.success("OTP sent to your email!");
      const email = form.getValues("email");
      navigate(`/partner/forgot-password?stage=2&email=${encodeURIComponent(email)}`);
    },
    onError: (error: unknown) => {
      console.log(error);
      toast.error("Failed to send OTP. Please try again.");
    }
  });

  const onSubmit = (values: FormData) => {
    mutate({ email: values.email });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full">
        <PageTitle title="Forgot Password" backLink="/partner/login" />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-auth-foreground">
                Email address
              </FormLabel>
              <div className="relative">
                <input 
                  {...field} 
                  type="email" 
                  className="auth-input" 
                  placeholder="Enter your registered email" 
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isDirty || isPending}
          className="w-full cursor-pointer"
        >
          {isPending ? "Sending OTP..." : "Next"}
        </Button>
      </form>
    </Form>
  );
};

export default Stage1;