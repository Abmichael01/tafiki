// src/store/useAuthStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import useVendorStore from "./vendorStore";

interface AuthState {
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean;

  // Actions
  setAuth: (tokens: { access: string; refresh: string }) => void;
  setAccess: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      access: null,
      refresh: null,
      isAuthenticated: false,

      // Set both tokens, but only persist refresh
      setAuth: ({ access, refresh }) =>
        set({
          access,
          refresh,
          isAuthenticated: true,
        }),

      // Update only access token (e.g., after refresh)
      setAccess: (access) => set({ access }),

      // Clear all auth data
      logout: () => {
        set({ access: null, refresh: null, isAuthenticated: false });
        // Clear vendor data when logging out
        useVendorStore.getState().clearVendor();
      },
    }),
    {
      name: "foodhybrid-auth", // Key in localStorage
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ["access", "refresh", "isAuthenticated"].includes(key)
          )
        ) as Pick<AuthState, "access" | "refresh" | "isAuthenticated">,
    }
  )
);

export default useAuthStore;