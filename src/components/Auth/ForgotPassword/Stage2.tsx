// components/ForgotPassword/Stage2.tsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Link } from "react-router-dom";
import { forgotPassword } from "@/api/apiEndpoints";
import { toast } from "sonner";

const otpSlotClassName =
  "size-13 sm:h-16 sm:w-16 text-[28px] md:text-[32px] data-[active=true]:ring-[0px] border first:rounded-l-[4px] last:rounded-r-[4px] rounded-[4px] shadow-none border-[#15221B1A] data-[active=true]:border-[#494949]";

const schema = z.object({
  otp: z.string().length(4, "OTP must be exactly 4 digits"),
});

type FormData = z.infer<typeof schema>;

const Stage2: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Redirect to stage 1 if no email is provided
  useEffect(() => {
    if (!email) {
      navigate('/partner/forgot-password?stage=1');
    }
  }, [email, navigate]);

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { email: string; otp: string }) => forgotPassword(data),
    onSuccess: () => {
      toast.success("OTP verified successfully!");
      const otp = form.getValues("otp");
      navigate(`/partner/forgot-password?stage=3&email=${encodeURIComponent(email!)}&otp=${otp}`);
    },
    onError: (error: unknown) => {
      console.log(error);
      toast.error("Invalid OTP. Please try again.");
    }
  });

  const onSubmit = (values: FormData) => {
    if (!email) return;
    
    mutate({
      email,
      otp: values.otp
    });
  };

  const handleBack = () => {
    navigate('/partner/forgot-password?stage=1');
  };

  if (!email) {
    return null; // Will redirect in useEffect
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="space-y-4">
          <button
            type="button"
            onClick={handleBack}
            className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            ← Back
          </button>
          <h2 className="text-center font-[700] text-[#3C4741] text-[20px] md:text-[28px]">
            Verify your email
          </h2>
        </div>

        <h2 className="text-center flex flex-col min-[500px]:not-odd:flex-row justify-center gap-2 items-center text-[16px]">
          <span className="text-[#6E6E6E]">Enter OTP sent to</span>
          <span className="underline">{email}</span>
        </h2>

        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <InputOTP maxLength={4} {...field}>
                <InputOTPGroup className="flex gap-2 justify-center w-full">
                  <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
                  <InputOTPSlot index={1} className={otpSlotClassName} />
                  <InputOTPSlot index={2} className={otpSlotClassName} />
                  <InputOTPSlot index={3} className={otpSlotClassName} />
                </InputOTPGroup>
              </InputOTP>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!form.formState.isDirty || isPending}
          className="disabled:bg-[#15221B]/50 w-full"
        >
          {isPending ? "Verifying..." : "Verify OTP"}
        </Button>

        <h2 className="flex gap-1 justify-center font-satoshi text-[#6E6E6E] font-[500] text-center text-[16px]">
          Remember your password?
          <Link to="/partner/login" className="text-[#15221B] underline">Sign in</Link>
        </h2>
      </form>
    </Form>
  );
};

export default Stage2;