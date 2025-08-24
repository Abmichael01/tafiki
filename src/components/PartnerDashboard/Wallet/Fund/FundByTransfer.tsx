import { Button } from "@/components/ui/button";
import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { fundWallet } from "@/api/apiEndpoints";
import { FundWalletData } from "@/types";
import errorMessage from "@/lib/errorMessage";

const FundByTransfer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [params] = useSearchParams()
    const amount = params.get("amount")

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FundWalletData) => fundWallet(data),
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({ queryKey: ["userDetails"] })
      navigate(`${location.pathname}?dialog=fundWallet&dialogCurrent=fundSuceess&amount=${amount}`);
    },
    onError: (error: Error) => {
      toast.error(errorMessage(error))
    }
  })

  const madeTransfer = () => {
    mutate({
      amount: Number(amount),
      payment_method: "transfer"
    })
  }

  return (
    <div className="font-satoshi">
      <h1 className="text-[16px] font-[400]">
        Make a transfer into this account
      </h1>
      <div className="space-y-[12px] text-[20px] mt-[16px]">
        <div className="flex items-center gap-[8px]">
          <h1 className="font-[400]">Account number:</h1>
          <h1 className="flex gap-[6px] items-center [&_svgr]:text-[20px] [&_svgr]:font-[700] font-[700] ">
            0123456789
            <IoCopyOutline className="stroke-[2px] cursor-pointer" />
          </h1>
        </div>
        <div className="flex items-center gap-[8px]">
          <h1 className="font-[400]">Bank:</h1>
          <h1 className="flex gap-[6px] items-center [&_svgr]:text-[20px] [&_svgr]:font-[700] font-[700] ">
            Lloyds Bank
            <IoCopyOutline className="stroke-[2px] cursor-pointer" />
          </h1>
        </div>
        <div className="flex items-center gap-[8px]">
          <h1 className="font-[400]">Account name:</h1>
          <h1 className="flex gap-[6px] items-center [&_svgr]:text-[20px] [&_svgr]:font-[700] font-[700] ">
            Username-FoodHybrid
          </h1>
        </div>
        <h1 className="text-[16px] font-[400]">
          This account would expire in <span className="font-[600]">5:00 </span>{" "}
          mins
        </h1>
      </div>
      <Link to="?dialog=fundWallet&dialogCurrent=amount">
        <Button
          onClick={madeTransfer}
          disabled={isPending}
          className="w-full mt-[28px]">
          {isPending ? "Confirming..." : "I've made the transfer"}
        </Button>
      </Link>
    </div>
  );
};

export default FundByTransfer;
