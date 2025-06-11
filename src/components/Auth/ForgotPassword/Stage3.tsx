// components/ForgotPassword/Stage3.tsx
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import { forgotPassword } from "@/api/apiEndpoints";
import { toast } from "sonner";

const formSchema = z.object({
  new_password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*\d)/, 
      "Password must contain at least one letter, and one number"
    ),
  confirm_password: z.string(),
}).refine((data) => data.new_password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"],
});

type FormData = z.infer<typeof formSchema>;

const Stage3: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const otp = searchParams.get('otp');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  // Redirect to stage 1 if no email or otp is provided
  useEffect(() => {
    if (!email || !otp) {
      navigate('/partner/forgot-password?stage=1');
    }
  }, [email, otp, navigate]);

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { email: string; otp: string; new_password: string }) => 
      forgotPassword(data),
    onSuccess: () => {
      toast.success("Password reset successfully!");
      navigate("/partner/login");
    },
    onError: (error: unknown) => {
      console.log(error);
      toast.error("Failed to reset password. Please try again.");
    }
  });

  const onSubmit = (values: FormData) => {
    if (!email || !otp) return;

    mutate({
      email,
      otp,
      new_password: values.new_password
    });
  };

  const handleBack = () => {
    navigate(`/partner/forgot-password?stage=2&email=${encodeURIComponent(email!)}`);
  };

  if (!email || !otp) {
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
            Create New Password
          </h2>
        </div>

        <p className="text-center text-[#6E6E6E] text-[16px]">
          Your new password must be different from previous used passwords
        </p>

        <div className="space-y-6">
          <FormField
            control={form.control}
            name="new_password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-auth-foreground">
                  New Password
                </FormLabel>
                <div className="relative">
                  <input 
                    {...field} 
                    type={showPassword ? "text" : "password"}
                    className="auth-input pr-10" 
                    placeholder="Enter new password" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-auth-foreground">
                  Confirm Password
                </FormLabel>
                <div className="relative">
                  <input 
                    {...field} 
                    type={showConfirmPassword ? "text" : "password"}
                    className="auth-input pr-10" 
                    placeholder="Confirm new password" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={!form.formState.isDirty || isPending}
          className="w-full cursor-pointer"
        >
          {isPending ? "Resetting Password..." : "Reset Password"}
        </Button>
      </form>
    </Form>
  );
};

export default Stage3;