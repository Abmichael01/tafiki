import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "@/api/apiEndpoints";
import { ChangePasswordData } from "@/types";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  old_password: z.string().min(1, "Current password is required"),
  new_password: z.string().min(6, "New password must be at least 6 characters"),
});

const passwordFields = [
  {
    name: "old_password" as const,
    label: "Current Password",
    placeholder: "Enter current password",
  },
  {
    name: "new_password" as const,
    label: "New Password",
    placeholder: "Enter new password",
  },
];

const EnterPassword: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ChangePasswordData) => changePassword(data),
    onSuccess: () => {
      navigate("/partner/profile/reset-password?current=resetSuccess");
    },
    onError: (error) => {
      console.error("Password change failed:", error);
      // Handle error - maybe show toast notification
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[60px]">
        <div className="space-y-[40px]">
          {passwordFields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={({ field: formField }) => (
                <FormItem className="space-y-[8px] flex flex-col items-center w-full">
                  <FormLabel className="text-[14px] text-[#6E6E6E]">
                    {field.label}
                  </FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      placeholder={field.placeholder}
                      autoComplete={field.name === "old_password" ? "current-password" : "new-password"}
                      className="py-[18px] px-[20px] border border-[#6E6E6E] w-full"
                      {...formField}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        
        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full disabled:bg-gray-400"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Changing Password...
            </>
          ) : (
            "Next"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default EnterPassword;