import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Vendor } from '@/types/admin';

interface VendorState {
  vendor: Vendor | null;
  isVendorLoaded: boolean;
  
  // Actions
  setVendor: (vendor: Vendor) => void;
  clearVendor: () => void;
  setVendorLoaded: (loaded: boolean) => void;
}

const useVendorStore = create<VendorState>()(
  persist(
    (set) => ({
      vendor: null,
      isVendorLoaded: false,

      setVendor: (vendor) => set({ vendor, isVendorLoaded: true }),
      
      clearVendor: () => set({ vendor: null, isVendorLoaded: false }),
      
      setVendorLoaded: (loaded) => set({ isVendorLoaded: loaded }),
    }),
    {
      name: "foodhybrid-vendor", // Key in localStorage
      partialize: (state) => ({
        vendor: state.vendor,
        isVendorLoaded: state.isVendorLoaded,
      }),
    }
  )
);

export default useVendorStore;
