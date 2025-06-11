import { PartnerSignupData } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserSignupStore = {
  userData: Partial<PartnerSignupData>;
  updateUserData: (fields: Partial<PartnerSignupData>) => void;
  resetUserData: () => void;
};

const usePartnerSignupStore = create<UserSignupStore>()(
  persist(
    (set) => ({
      userData: {},
      updateUserData: (fields) =>
        set((state) => ({
          userData: {
            ...state.userData,
            ...fields,
          },
        })),
      resetUserData: () =>
        set({
          userData: {},
        }),
    }),
    {
      name: "partner-signup-storage",
      storage: createJSONStorage(() => sessionStorage), 
      partialize: (state) => ({ userData: state.userData }),
      version: 1,
    }
  )
);

export default usePartnerSignupStore;