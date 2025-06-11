import { WithdrawalData } from '@/types';
import { create } from 'zustand';


interface WithdrawalStore {
  withdrawal: WithdrawalData;
  updateWithdrawal: (data: Partial<WithdrawalData>) => void;
  clearWithdrawal: () => void;
}

const useWithdrawalStore = create<WithdrawalStore>((set) => ({
  withdrawal: {
    amount: 0,
    to: {} as WithdrawalData['to'], // Assuming 'to' is of type BeneficiaryData
    transaction_pin: ""
  },
  
  updateWithdrawal: (data) => set((state) => ({
    withdrawal: { ...state.withdrawal, ...data }
  })),
  
  clearWithdrawal: () => set({
    withdrawal: {
      amount: 0,
      to: {} as WithdrawalData['to'],
      transaction_pin: ""
    }
  })
}));

export default useWithdrawalStore;