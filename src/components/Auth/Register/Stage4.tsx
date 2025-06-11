// components/Register/Stage4.tsx
import React, { useState } from "react";
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
import { Eye, EyeOff } from "lucide-react";
import usePartnerSignupStore from "@/stores/partnerSingupStore";

// Define schema with password and confirm password

const schema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/,
        "Password must contain uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });

type FormData = z.infer<typeof schema>;

const Stage4: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();
  const { updateUserData } = usePartnerSignupStore();

  const onSubmit = (values: FormData) => {
    console.log("Submitted Stage 4:", values);
    // Proceed to next step
    updateUserData(values);
    navigate("/partner/register?stage=5");
  };

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <h2 className="text-center font-[700] text-[#3C4741] text-[20px] md:text-[28px]">Set your password</h2>

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Password</FormLabel>
              <div className="relative">
                <input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum of 6 characters"
                  className="auth-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-[#6E6E6E] cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#6E6E6E] text-[14px]">Confirm Password</FormLabel>
              <div className="relative w-full">
                <input
                  {...field}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="auth-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={!form.formState.isDirty}
          className="disabled:bg-[#15221B]/50 w-full"
        >
          Next
        </Button>

        <h2 className="flex gap-1 justify-center font-satoshi text-[#6E6E6E] font-[500] text-center text-[16px]">
          Already have an account?
          <Link to="/partner/login" className="text-[#15221B] underline">Signin</Link>
        </h2>
      </form>
    </Form>
  );
};

export default Stage4;