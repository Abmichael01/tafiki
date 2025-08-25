import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../stores/authStore";
import useVendorStore from "../stores/vendorStore";
import { getVendor } from "../api/apiEndpoints";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();
  const { setVendor, setVendorLoaded } = useVendorStore();

  // Fetch vendor data when authenticated
  const { data: vendorData, isLoading } = useQuery({
    queryKey: ["vendor"],
    queryFn: getVendor,
    enabled: isAuthenticated, // Only run query if authenticated
    retry: 1,
  });

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

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
