import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
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
import useTransactionPinStore from "@/stores/transactionPinStore";
import { TransactionPinData } from "@/types";
import { setTransactionPin } from "@/api/apiEndpoints";
import { Loader2 } from "lucide-react";
import useUserDetailsStore from "@/stores/userStore";
import { toast } from "sonner";
import errorMessage from "@/lib/errorMessage";

const formSchema = z.object({
  otp: z.string().length(4, "OTP must be 4 digits"),
});

const otpSlotClassName =
  "h-16 w-16 text-[32px] data-[active=true]:ring-[0px] border first:rounded-l-[4px] last:rounded-r-[4px] rounded-[4px] shadow-none border-[#15221B1A] data-[active=true]:border-[#494949]";

const ConfirmOtp: React.FC = () => {
  const navigate = useNavigate();
  const { updatePinData, pinData } = useTransactionPinStore();
  const { userDetails } = useUserDetailsStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Partial<TransactionPinData>) => setTransactionPin(data),
    onSuccess: () => {
      navigate("/partner/profile/withdrawal-pin/change-pin?current=success");
    },
    onError: (error: Error) => {
      toast.error(errorMessage(error))
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("OTP submitted:", values);
    
    // Update pin data with OTP
    const updatedPinData = {
      otp: values.otp,
      pin: pinData.pin,
    };

    console.log(updatedPinData)
    
    updatePinData(updatedPinData);
    
    // Mutate with the complete data (OTP + PIN from store)
    mutate(updatedPinData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[80px]">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="space-y-[24px] font-satoshi flex flex-col items-center">
              <FormLabel className="font-[500] text-[16px]">
                Enter OTP sent to <span className="underline">{userDetails?.personal_details.email}</span>
              </FormLabel>
              <FormControl>
                <InputOTP 
                  maxLength={4}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
                    <InputOTPSlot index={1} className={otpSlotClassName} />
                    <InputOTPSlot index={2} className={otpSlotClassName} />
                    <InputOTPSlot index={3} className={otpSlotClassName} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#15221B] disabled:bg-[#15221B]/50"
        >
          Confirm
          {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default ConfirmOtp;