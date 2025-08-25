import useVendorStore from "../stores/vendorStore";

export const useVendor = () => {
  const { vendor, isVendorLoaded, setVendor, clearVendor, setVendorLoaded } = useVendorStore();
  
  return {
    vendor,
    isVendorLoaded,
    setVendor,
    clearVendor,
    setVendorLoaded,
  };
};
