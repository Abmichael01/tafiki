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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FundByTransfer from "./FundByTransfer";
import FundByCard from "./FundByCard";
import FundWalletAmount from "./FundWalletAmount";
import { useSearchParams } from "react-router-dom";
import FundSuccess from "./FundSuccess";

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
              Top up your Food Hybrid wallet and shop your favorite products
            </DialogDescription>
          </DialogHeader>}
          {dialogCurrent === "payment-method" && (
              <Accordion
                type="single"
                collapsible
                className="[&_svg]:text-[#494949] text-[#494949]"
              >
                <AccordionItem value="item-1" className="outline-none">
                  <AccordionTrigger>By Transfer</AccordionTrigger>
                  <AccordionContent>
                    <FundByTransfer />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="outline-none">
                  <AccordionTrigger>By Card</AccordionTrigger>
                  <AccordionContent>
                    <FundByCard />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          {dialogCurrent === "amount" || !dialogCurrent  && <FundWalletAmount />}
          {dialogCurrent === "fundSuceess" && <FundSuccess />}
          <DialogClose show={!(dialogCurrent === "fundSuceess")} />
        </DialogContent>
    </GlobalDialog>
  );
};

export default FundWalletDialog;
