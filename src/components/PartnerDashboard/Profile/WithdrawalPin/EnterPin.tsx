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
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useUserDetailsStore from "@/stores/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setTransactionPin } from "@/api/apiEndpoints";
import { TransactionPinData } from "@/types";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import useTransactionPinStore from "@/stores/transactionPinStore";

const formSchema = z.object({
  pin: z.string().length(4, "PIN must be 4 digits").optional(),
});

const otpSlotClassName =
  "h-12 w-12 text-[32px] data-[active=true]:ring-[0px] first:rounded-l-none first:border-l-0 last:rounded-r-none border-0 shadow-none border-b-2 border-[#444] data-[active=true]:border-[#494949]";

const EnterPin: React.FC = () => {
  const navigate = useNavigate();
  const { userDetails } = useUserDetailsStore();
  const hasPin = userDetails?.has_pin;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
    },
  });

  const { updatePinData } = useTransactionPinStore();
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (data?: Partial<TransactionPinData>) => setTransactionPin(data),
    onSuccess: (data) => {
      if (hasPin) {
        console.log(data);
        updatePinData({
          pin: form.getValues().pin,
        });
        navigate(
          "/partner/profile/withdrawal-pin/change-pin?current=confirmOtp"
        );
      } else {
        queryClient.invalidateQueries({ queryKey: ["userDetails"] })
        toast.success("PIN set successfully");
        navigate("/partner/profile/withdrawal-pin/");
      }
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (hasPin) {
      mutate(undefined);
    } else {
      mutate({transaction_pin: data.pin });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[80px]">
        <div className="space-y-[40px]">
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem className="space-y-[24px] font-satoshi flex flex-col items-center">
                  <FormLabel className="font-[500] text-[16px]">
                    Enter {hasPin ? "new" : ""} PIN
                  </FormLabel>
                  <FormControl>
                    <InputOTP
                      maxLength={4}
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <InputOTPGroup className="flex gap-2">
                        {[0, 1, 2, 3].map((index) => (
                          <InputOTPSlot
                            key={index}
                            index={index}
                            className={otpSlotClassName}
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#15221B] disabled:bg-[#15221B]/50"
        >
          {hasPin ? "Reset PIN" : "Set PIN"}
          {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default EnterPin;
