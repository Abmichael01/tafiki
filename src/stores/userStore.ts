import { create } from 'zustand';
import { UserDetails } from '@/types';

interface UserDetailsState {
  userDetails: UserDetails | null;
  setUserDetails: (details: UserDetails) => void;
  clearUserDetails: () => void;
}

const useUserDetailsStore = create<UserDetailsState>((set) => ({
  userDetails: null,
  setUserDetails: (details) => set({ userDetails: details }),
  clearUserDetails: () => set({ userDetails: null }),
}));

export default useUserDetailsStore;