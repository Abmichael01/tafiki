// src/layouts/DashboardLayout.tsx
import React, { useEffect } from "react";
import useAuthStore from "@/stores/authStore";
import { useDialogStore } from "@/stores/dialogStore";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";

// Components
import Navbar from "@/components/PartnerDashboard/Layouts/Navbar";
import Sidebar from "@/components/PartnerDashboard/Layouts/Sidebar";
import FundWalletDialog from "@/components/PartnerDashboard/Wallet/Fund/FundWalletDialog";
import WithdrawFromWallet from "@/components/PartnerDashboard/Wallet/Withdraw/WithdrawalDialog";
import WithdrawFromPortfolio from "@/components/PartnerDashboard/Portfolio/Withdraw/WithdrawalDialog";
import { toast } from "sonner";
import { getCurrentUser } from "@/api/apiEndpoints";
import useUserDetailsStore from "@/stores/userStore";
import { useQuery } from "@tanstack/react-query";
import { UserDetails } from "@/types";
import EditProfileDialog from "@/components/PartnerDashboard/Profile/EditProfile/EditProfileDialog";
import Taskbar from "@/components/PartnerDashboard/Layouts/Taskbar";
import { motion } from "framer-motion";
import PageLoading from "@/components/Others/PageLoading";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();
  const { openDialog } = useDialogStore();
  const [searchParams] = useSearchParams();
  const dialog = searchParams.get("dialog");
  const { setUserDetails } = useUserDetailsStore();

  // Trigger dialog if present in URL
  useEffect(() => {
    if (dialog) {
      openDialog(dialog);
    }
  }, [dialog, openDialog]);

  const { data, isLoading, isError, error } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["userDetails"],
  });
  console.log(error);
  useEffect(() => {
    const verifyUser = async () => {
      if (data) {
        setUserDetails(data as UserDetails);
      }
      if (!data && !isLoading && isError) {
        logout()
      }
    };

    verifyUser();
  }, [setUserDetails, data, navigate, logout, isLoading, isError]);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.info("Session expired, login to continue");
      navigate("/partner/login");
    }
  }, [isAuthenticated, navigate]);

  // Optional: Show loading state or splash screen here
  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="bg-[#F9F9F9] flex relative text-[#494949] min-h-screen">
      <div className="sticky top-0 bottom-0 h-full z-[999]">
        <Sidebar />
      </div>
      <div className="flex-1 min-h-[90vh] w-full sm:pb-10 flex flex-col pb-25 lg:pb-0">
        <Navbar />
        <div className="md:px-14 sm:px-10 px-2 lg:px-10 h-full">
            <motion.div
            key={location.pathname}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
            duration: 0.5,
            }}
            className="bg-white rounded-[6px]  border border-[#F0F0F0] md:px-14 sm:px-10 px-5 lg:px-10 py-5 sm:py-10 flex-grow h-full"
            >
            <Outlet />
            </motion.div>
        </div>

        <FundWalletDialog />
        <WithdrawFromWallet />
        <WithdrawFromPortfolio />
        <EditProfileDialog />
      </div>
      <Taskbar />
    </div>
  );
};

export default DashboardLayout;
