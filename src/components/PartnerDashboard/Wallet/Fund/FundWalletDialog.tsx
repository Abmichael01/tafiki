import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GlobalDialog } from "@/components/ui/CustomDialog";
import { PiCoinsBold } from "react-icons/pi";
import FundWalletAmount from "./FundWalletAmount";
import { useSearchParams } from "react-router-dom";
import FundSuccess from "./FundSuccess";
import StripePayment from "./StripePayment";

const FundWalletDialog: React.FC = () => {
  const [params] = useSearchParams();
  const dialogCurrent = params.get("dialogCurrent");

  return (
    <GlobalDialog dialogName="fundWallet">
        <DialogContent className="space-y-[5px]" data-dialog-close="false">
          { dialogCurrent !== "fundSuceess" && <DialogHeader>
            <DialogTitle className="flex items-center gap-1">
              Fund wallet
              <PiCoinsBold className="text-yellow-500 fill-yellow-400" />{" "}
            </DialogTitle>
            <DialogDescription>
              Add funds to your wallet securely with Stripe payment processing
            </DialogDescription>
          </DialogHeader>}

          {dialogCurrent === "amount" || !dialogCurrent  && <FundWalletAmount />}
          {dialogCurrent === "stripe-payment" && <StripePayment />}
          {dialogCurrent === "fundSuceess" && <FundSuccess />}
          <DialogClose show={!(dialogCurrent === "fundSuceess")} />
        </DialogContent>
    </GlobalDialog>
  );
};

export default FundWalletDialog;
