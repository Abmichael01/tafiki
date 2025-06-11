import { create } from 'zustand';
import { TransactionPinData } from '../types';

interface PinChangeStore {
  pinData: TransactionPinData;
  updatePinData: (data: Partial<TransactionPinData>) => void;
  clearPinData: () => void;
}

const useTransactionPinStore = create<PinChangeStore>((set) => ({
  pinData: {},
  updatePinData: (data) => set((state) => ({
    pinData: { ...state.pinData, ...data }
  })),
  clearPinData: () => set({ pinData: {} })
}));

export default useTransactionPinStore;