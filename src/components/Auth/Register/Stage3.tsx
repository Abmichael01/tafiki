// components/Register/Stage3.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { PartnerSignupData } from "@/types";
import usePartnerSignupStore from "@/stores/partnerSingupStore";
import { verifyOtp } from "@/api/apiEndpoints";
import { toast } from "sonner";

const otpSlotClassName =
  "size-13 sm:h-16 sm:w-16 text-[28px] md:text-[32px] data-[active=true]:ring-[0px] border first:rounded-l-[4px] last:rounded-r-[4px] rounded-[4px] shadow-none border-[#15221B1A] data-[active=true]:border-[#494949]";

const schema = z.object({
  otp: z.string().length(4, "OTP must be exactly 4 digits"),
});

type FormData = z.infer<typeof schema>;

const Stage3: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { userData } = usePartnerSignupStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Partial<PartnerSignupData> ) => verifyOtp(data),
    onSuccess: () => {
      toast.success("OTP verified successfully!");
      navigate("/partner/register?stage=4");
    },
    onError: (error: unknown) => {
      console.log(error)
      toast.error("Failed to verify OTP. Please try again.");
    }
  })

  const onSubmit = (values: FormData) => {
    console.log("Submitted OTP:", values.otp);
    console.log(userData)
    const userDataWithOtp = {
      ...userData,
      otp: values.otp
    };
    mutate(userDataWithOtp)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <h2 className="text-center font-[700] text-[#3C4741] text-[20px] md:text-[28px]">Confirm your email address</h2>

        <h2 className="text-center flex flex-col min-[500px]:not-odd:flex-row justify-center gap-2 items-center text-[16px]">
          <span className="text-[#6E6E6E]">Enter OTP sent to</span>
          <span className="underline">{userData.email}</span>
        </h2>

        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <InputOTP maxLength={6} {...field}>
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
          {isPending ? "Please wait..." : "Confirm"}
        </Button>

        <h2 className="flex gap-1 justify-center font-satoshi text-[#6E6E6E] font-[500] text-center text-[16px]">
          Already have an account?
          <Link to="/partner/login" className="text-[#15221B] underline">Signin</Link>
        </h2>
      </form>
    </Form>
  );
};

export default Stage3;