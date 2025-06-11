import { getBeneficiaries } from "@/api/apiEndpoints";
import { Button } from "@/components/ui/button";
import useWithdrawalStore from "@/stores/useWithdrawalStore";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Beneficiary: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["beneficiaries"],
    queryFn: getBeneficiaries,
  });
  const { updateWithdrawal } = useWithdrawalStore();

  return (
    <div>
      <h1 className="text-[12px]">Beneficiary</h1>
      <div className="mt-[4px] space-y-4">
        {data?.map((beneficiary) => (
          <Link
            key={beneficiary?.id}
            to="?dialog=walletWithdrawal&dialogCurrent=amount"
            className="flex gap-2 items-center"
            onClick={() => {
              updateWithdrawal({
                to: beneficiary,
              });
            }}
          >
            <FaUserCircle className="size-[33.33px]" />
            <div className="">
              <h1 className="text-[18px] font-[600]">{beneficiary.name}</h1>
              <p className="text-[14px] font-[500] text-[#6E6E6E]">
                {beneficiary.account_number} | {beneficiary.bank_name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/partner/portfolio/wallet?dialog=walletWithdrawal&dialogCurrent=newBeneficiary"
        className="flex justify-center w-full"
      >
        <Button
          variant={"outline"}
          className="mt-[40px] rounded-full p-[8px] bg-[#F0F0F0]"
        >
          <Plus />
          Add a new beneficiary
        </Button>
      </Link>
    </div>
  );
};

export default Beneficiary;
