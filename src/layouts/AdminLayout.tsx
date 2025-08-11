// src/layouts/AdminLayout.tsx
import React, { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

// Components
import Navbar from "@/components/Admin/Layouts/Navbar";
import Sidebar from "@/components/Admin/Layouts/Sidebar";
// import { toast } from "sonner";
// import { getCurrentUser } from "@/api/apiEndpoints";
// import useUserDetailsStore from "@/stores/userStore";
// import { useQuery } from "@tanstack/react-query";
// import { UserDetails } from "@/types";
// import { Loader2 } from "lucide-react";
// import Logo from "@/components/Others/Logo";
import { motion } from "framer-motion";
import { useDialogStore } from "@/stores/dialogStore";
import UploadProduct from "@/components/Admin/UploadProduct/UploadProduct";

const AdminLayout: React.FC = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated, logout } = useAuthStore();
  const { openDialog } = useDialogStore();
  const [searchParams] = useSearchParams();
  const dialog = searchParams.get("dialog");
//   const { setUserDetails } = useUserDetailsStore();

  // Trigger dialog if present in URL
  useEffect(() => {
    if (dialog) {
      openDialog(dialog);
    }
  }, [dialog, openDialog]);

//   const { data, isLoading, isError } = useQuery({
//     queryFn: getCurrentUser,
//     queryKey: ["userDetails"],
//   });
//   console.log(data);
//   useEffect(() => {
//     const verifyUser = async () => {
//       if (data) {
//         setUserDetails(data as UserDetails);
//       }
//       if (!data && !isLoading && isError) {
//         logout()
//       }
//     };

//     verifyUser();
//   }, [setUserDetails, data, navigate, logout, isLoading, isError]);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       toast.info("Session expired, login to continue");
//       navigate("/partner/login");
//     }
//   }, [isAuthenticated, navigate]);

//   // Optional: Show loading state or splash screen here
//   if (isLoading) {
//     return (
//       <div className="h-screen flex flex-col gap-5 items-center justify-center">
//         <Logo />
//         <Loader2 className="animate-spin" />
//       </div>
//     ); // Or a loader/spinner
//   }

  return (
    <div className="bg-[#F9F9F9] flex relative text-[#494949] min-h-screen">
      <div className="fixed top-0 bottom-0 h-full z-[999]">
        <Sidebar />
      </div>
      <div className="flex-1 lg:ml-[205px] w-full min-h-[90vh] flex flex-col pb-25 sm:pb-30 lg:pb-10">
        <Navbar />
        <div className="md:px-14 sm:px-10 px-2 lg:px-10 h-full">
            <motion.div
            key={location.pathname}
            className="bg-white rounded-[6px]  border border-[#F0F0F0] md:px-14 sm:px-10 px-5 lg:px-10 py-5 sm:py-10 flex-grow h-full"
            >
            <Outlet />
            </motion.div>
        </div>
      </div>
      <UploadProduct />
    </div>
  );
};

export default AdminLayout;
