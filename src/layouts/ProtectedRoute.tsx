import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../stores/authStore";
import useVendorStore from "../stores/vendorStore";
import { getVendor } from "../api/apiEndpoints";
import PageLoading from "@/components/Others/PageLoading";

const ProtectedRoute = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const { setVendor, setVendorLoaded, clearVendor } = useVendorStore();

  // Fetch vendor data when authenticated
  const {
    data: vendorData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["vendor", ], // Include pathname to refetch on route change
    queryFn: getVendor,
    enabled: isAuthenticated, // Only run query if authenticated
    retry: 1,
    refetchOnMount: true, // Always refetch when component mounts
    staleTime: 0, // Consider data stale immediately to ensure fresh checks
  });

  // Handle authentication failures
  useEffect(() => {
    if (isError && error) {
      console.error("Vendor authentication failed:", error);
      // Clear vendor data and logout user
      clearVendor();
      logout();
    }
  }, [isError, error, clearVendor, logout]);

  // Update vendor store when data is fetched
  useEffect(() => {
    if (vendorData) {
      setVendor(vendorData);
    }
  }, [vendorData, setVendor]);

  // Set loading state
  useEffect(() => {
    setVendorLoaded(!isLoading);
  }, [isLoading, setVendorLoaded]);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/retail-shop/login" replace />;
  }

  // If there was an authentication error, redirect to login
  if (isError) {
    return <Navigate to="/retail-shop/login" replace />;
  }

  if (isLoading) {
    return <PageLoading />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
