import { create } from 'zustand'
import { Vendor } from '@/types/admin'

export type VendorsState = {
  vendors: Vendor[]
  setVendors: (vendors: Vendor[]) => void
  clearVendors: () => void
}

const useVendorsStore = create<VendorsState>((set) => ({
  vendors: [],

  setVendors: (vendors) => set({ vendors }),

  clearVendors: () => set({ vendors: [] }),
}))

export default useVendorsStore