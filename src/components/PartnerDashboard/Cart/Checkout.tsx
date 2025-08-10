import React, { useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkoutCart } from "@/api/apiEndpoints";
import { Alert, AlertDescription } from "@/components/ui/alert";
import errorMessage from "@/lib/errorMessage";
import { GoArrowLeft } from "react-icons/go";
import { CheckCircle2 } from "lucide-react"; 
import useUserDetailsStore from "@/stores/userStore";
import { toast } from "sonner";

const otpSlotClassName =
  "h-12 w-12 text-[32px] data-[active=true]:ring-[0px]  first:rounded-l-none first:border-l-0 last:rounded-r-none border-0 shadow-none  border-b-2 border-[#444] data-[active=true]:border-[#494949]";

const Checkout: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); 
  const { userDetails } = useUserDetailsStore()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const vendor = params.get("vendor")

  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: {
      transaction_pin: string;
      vendor_id: string
    }) => checkoutCart(data),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["cartItems"] })
        queryClient.invalidateQueries({ queryKey: ["userDetails"] })
        setIsSuccess(true);
      console.log("Withdrawal successful");
    },
    onError: (error: unknown) => {
      console.error("Withdrawal failed:", error);
      // Handle error appropriately, e.g., show a toast notification
    },
  });

  useEffect(() => {
    if(!userDetails?.has_pin) {
      toast.info("You need to set pin to checkout")
      navigate("/partner/profile/withdrawal-pin")
    }
  }, [userDetails, navigate])

  const handleSubmit = () => {

    mutate({
      transaction_pin: otp,
      vendor_id: vendor as string
    });
  };

  
  // ...existing handleSubmit...

  if (isSuccess) {
    return (
      <div className="mt-[24px] flex flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
          <h1 className="text-2xl font-satoshi font-semibold text-center">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 text-center max-w-[300px]">
            Your order has been placed successfully. You can track your order status in My Orders.
          </p>
        </div>
        <Link 
          to="/partner/my-orders?tab=processing"
          className="w-full max-w-[300px]"
        >
          <Button 
            className="w-full bg-[#15221B]"
          >
            View My Orders
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-[24px] space-y-[60px]">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/partner/cart/delivery-information">
          <GoArrowLeft className="size-[24px]" />
        </Link>
        <h1 className=" text-[20px] sm:text-[24px] font-satoshi font-semibold">
          Checkout
        </h1>
      </div>
      <div className="space-y-[24px] font-satoshi flex flex-col items-center">
        <h1 className="text-[20px] font-semibold">Confirm your order</h1>
        {(error as Error) && (
        <Alert variant="destructive" className="bg-destructive/10 border-none">
          <AlertDescription>{errorMessage(error as Error)}</AlertDescription>
        </Alert>
      )}
        <h1 className="font-[500] text-[16px]">Enter withdrawal PIN</h1>
        <InputOTP maxLength={4} value={otp} onChange={setOtp}>
          <InputOTPGroup className="flex gap-2">
            <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
            <InputOTPSlot index={1} className={otpSlotClassName} />
            <InputOTPSlot index={2} className={otpSlotClassName} />
            <InputOTPSlot index={3} className={otpSlotClassName} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full bg-[#15221B]"
        disabled={otp.length < 4 || isPending}
      >
        {isPending ? "Processing..." : "Complete Order"}
      </Button>
    </div>
  );
};

export default Checkout;
