import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GlobalDialog } from "@/components/ui/CustomDialog";
import { FaMoneyBill } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import Beneficiary from "./Beneficiary";
import WithdrawalAmount from "./WithdrawalAmount";
import { ArrowLeft } from "lucide-react";
import EnterPin from "./EnterPin";
import ProcessingWithdrawal from "./ProcessingWithdrawal";
import AddBeneficiary from "../../Profile/Beneficiary/AddBeneficiary";
import useWithdrawalStore from "@/stores/useWithdrawalStore";

const WithdrawalDialog: React.FC = () => {
  const [params] = useSearchParams();
  const dialogCurrent = params.get("dialogCurrent");
  const navigate = useNavigate();
  
  const { clearWithdrawal } = useWithdrawalStore();

  React.useEffect(() => {
    clearWithdrawal()
  }, [clearWithdrawal])

  return (
    <GlobalDialog dialogName="withdrawFromWallet">
      <DialogContent>
        { dialogCurrent !== "processing" && <DialogHeader className="space-y-[8px] text-[#494949]">
          {dialogCurrent && (
            <div onClick={() => navigate(-1)} className="cursor-pointer"> 
              <ArrowLeft className="text-[] size-[24]" />
             </div>
          )}
          <DialogTitle className="flex gap-1 items-center">
            Withdraw
            <FaMoneyBill className="fill-[#157811]" />
          </DialogTitle>
        </DialogHeader>}
        {dialogCurrent === "beneficiary" || !dialogCurrent && <Beneficiary /> }
        {dialogCurrent === "amount" && <WithdrawalAmount /> }
        {dialogCurrent === "newBeneficiary" && <AddBeneficiary redirectTo="/partner/portfolio/wallet?dialog=walletWithdrawal" /> }
        {dialogCurrent === "enterPin" && <EnterPin /> }
        {dialogCurrent === "processing" && <ProcessingWithdrawal /> }
      </DialogContent>
    </GlobalDialog>
  );
};

export default WithdrawalDialog;
