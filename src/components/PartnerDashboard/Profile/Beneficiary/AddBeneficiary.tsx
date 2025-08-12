import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { banks } from "./banks";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BeneficiaryData } from "@/types";
import { addBeneficiary } from "@/api/apiEndpoints";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Zod schema for form validation
const formSchema = z.object({
  bank_name: z.string().min(1, "Please select a bank"),
  account_number: z
    .string()
    .min(10, "Account number must be at least 10 digits")
    .max(10, "Account number must be exactly 10 digits")
    .regex(/^\d+$/, "Account number must contain only numbers"),
  name: z
    .string()
    .min(2, "Account name must be at least 2 characters")
    .max(50, "Account name must not exceed 50 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface Props {
  redirectTo?: string;
}

const AddBeneficiary: React.FC<Props> = ({ redirectTo }) => {
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [verified, setVerified] = React.useState(false);
  const [verificationError, setVerificationError] = React.useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bank_name: "",
      account_number: "",
      name: "",
    },
  });

  const selectedBankName = form.watch("bank_name");
  const accountNumber = form.watch("account_number");

  const verifyAccountNumber = async () => {
    if (!selectedBankName || !accountNumber) {
      setVerificationError("Please select a bank and enter an account number.");
      return;
    }

    // Find the bank code from the banks array
    const selectedBank = banks.find((bank) => bank.name === selectedBankName);
    if (!selectedBank) {
      setVerificationError("Selected bank is not supported.");
      return;
    }

    setIsVerifying(true);
    setVerificationError("");
    setVerified(false);

    try {
      const response = await axios.get(
        `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBank.code}`,
        {
          headers: {
            Authorization:
              "Bearer sk_test_bacb546c151e18d44f3f4aa17a98aec6379b3c55",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.status) {
        form.setValue("name", response.data.data.account_name);
        setVerified(true);
        setVerificationError("");
      } else {
        setVerificationError(
          "Failed to verify account number. Please try again."
        );
      }
    } catch (error) {
      console.error("Error verifying account number:", error);
      setVerificationError(
        "An error occurred while verifying the account number."
      );
      form.setValue("name", "");
    } finally {
      setIsVerifying(false);
    }
  };

  // Auto-verify when both bank and account number are available
  React.useEffect(() => {
    if (selectedBankName && accountNumber && accountNumber.length === 10) {
      const timer = setTimeout(() => {
        verifyAccountNumber();
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setVerified(false);
      form.setValue("name", "");
      setVerificationError("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBankName, accountNumber]);

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: BeneficiaryData) => addBeneficiary(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["beneficiaries"] });
      navigate(redirectTo ? redirectTo : "/partner/profile/beneficiary");
      console.log("Beneficiary added successfully:", data);
      toast.success("Beneficiary added successfully!");
      form.reset();
    },
    onError: (error: unknown) => {
      console.error("Error adding beneficiary:", error);
      setVerificationError("Failed to add beneficiary. Please try again.");
    },
  });

  const onSubmit = (data: FormData) => {
    if (!verified) {
      setVerificationError("Please verify the account number first.");
      return;
    }
    console.log("Form submitted:", data);
    mutate(data);
  };

  return (
    <div className="space-y-[60px]">
      <Form {...form}>
        <div className="space-y-[12px] font-satoshi">
          <FormField
            control={form.control}
            name="bank_name"
            render={({ field }) => (
              <FormItem className="space-y-[8px]">
                <FormLabel className="text-[14px] font-[500]">
                  Select Bank
                </FormLabel>
                <div className="relative">
                  <select
                    {...field}
                    defaultValue={field.value}
                    className="w-full px-[16px] h-full py-[10px] bg-[#F0F0F0] text-[16px] border border-[#D1D1D1] rounded-md focus:ring-2 focus:ring-[#4C8BF5] text-[#6E6E6E]"
                  >
                    <option value="" disabled>
                      Select Bank
                    </option>
                    {banks.map((bank) => (
                      <option key={bank.code} value={bank.name}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="account_number"
            render={({ field }) => (
              <FormItem className="space-y-[8px]">
                <FormLabel className="text-[14px] font-[500]">
                  Account number
                </FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    className="dialog-input px-[16px] py-[20px] bg-[#F0F0F0] text-[16px] w-full rounded-[12px] outline-none"
                    placeholder="1234567890"
                    maxLength={10}
                  />
                </FormControl>
                <FormMessage />
                {verificationError && (
                  <p className="text-red-500 text-sm">{verificationError}</p>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-[8px]">
                <FormLabel className="text-[14px] font-[500]">
                  Account name
                </FormLabel>
                <FormControl>
                  <div className="px-[16px] bg-[#F0F0F0] rounded-[12px] w-full text-[18px] flex items-center">
                    <FaUserCircle className="text-[#494949] size-[16.6px]" />
                    <input
                      {...field}
                      type="text"
                      className="w-full px-[12px] py-[10px] outline-none border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                      readOnly
                      placeholder="Account name will appear here"
                    />
                    {isVerifying && (
                      <Loader2 className="text-[#6E6E6E] size-5 animate-spin" />
                    )}
                    {verified && !isVerifying && (
                      <CheckCircle2 className="text-[#16A34A] size-5" />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-[48px]">
            <Button
              onClick={form.handleSubmit(onSubmit)}
              className="bg-[#15221B] w-full h-[48px]"
              disabled={!verified || isVerifying || isPending}
            >
              {isVerifying
                ? "Verifying..."
                : isPending
                ? "Adding Beneficiary..."
                : "Next"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddBeneficiary;
