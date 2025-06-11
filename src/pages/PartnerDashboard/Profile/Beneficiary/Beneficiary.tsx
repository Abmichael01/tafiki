import { Plus, Trash } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBeneficiary, getBeneficiaries } from "@/api/apiEndpoints";
import { toast } from "sonner";



const Beneficiary: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["beneficiaries"],
    queryFn: getBeneficiaries,
  })

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => deleteBeneficiary(id),
    onSuccess: () => {
      // Invalidate the query to refetch beneficiaries after deletion
      queryClient.invalidateQueries({ queryKey: ["beneficiaries"] });
      toast.success("Beneficiary removed successfully");
    }
  })

  // Log the data for debugging
  // const deleteBeneficiary = (id: number) => {
  //   mutate(id, {
  //     onSuccess: () => {
  //       dismiss();
  //     },
  //   });
  // }
  console.log(data);
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile/withdrawal-pin">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Beneficiary</h1>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-[8px]">
          {data?.map((beneficiary, index) => (
            <div
              key={index}
              className="border-b px-[12px] py-[8px] flex justify-between items-center"
            >
              <div className="flex items-center gap-[12px]">
                <FaUserCircle className="size-[33.3px] text-[#494949] fill-[#494949]/40 " />
                <div className="">
                  <h1 className="text-[18px] font-[600]">{beneficiary.name}</h1>
                  <p className="font-satoshi text-[14px]">
                    {beneficiary.account_number} | {beneficiary.bank_name}
                  </p>
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="cursor-pointer">
                    <Trash className="text-[#494949]  w-[18px]" />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center mt-[20px] text-[19px] font-[500]">
                    Are you sure you want to remove <span className="font-semibold">‘{beneficiary.name}’ </span> as a Beneficiary?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex gap-[8px] w-full mt-[20px]">
                    <AlertDialogCancel className="button text-[#494949] flex-1">No, Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {
                      mutate(beneficiary?.id as number);
                      if (isPending) toast.info("Removing beneficiary...", {
                        duration: Infinity,
                      });
                    }} className="flex-1 button bg-[#15221B] hover:bg-[#15221B]/90">{ !isPending ?  "Yes, Remove" : "Removing...." }</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>
        <Link to="/partner/profile/beneficiary/new?current=addBeneficiary" className="flex gap-[4px] [&_svg]:size-[20px] items-center rounded-full hover:bg-[#F9F9F9] w-fit cursor-pointer px-[12px] py-[8px] font-satoshi text-[16px]">
          <Plus />
          Add a new beneficiary
        </Link>
      </div>
    </div>
  );
};

export default Beneficiary;
