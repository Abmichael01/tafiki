// src/store/useUserSignupStore.ts
import { PartnerSignupData } from "@/types";
import { create } from "zustand";


type UserSignupStore = {
  userData: Partial<PartnerSignupData>;
  updateUserData: (fields: Partial<PartnerSignupData>) => void;
  resetUserData: () => void;
};

const usePartnerSignupStore = create<UserSignupStore>((set) => ({
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
}));

export default usePartnerSignupStore;