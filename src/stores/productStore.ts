// stores/productStore.ts
import { create } from 'zustand'

// Define the shape of product data
export type ProductData = {
  selectedImageId: string | null;
  productName: string;
  aboutProduct: string;
  productWeight: string;
  bagsPerUnit: number;
  pricePerUnit: string;
  quantity: string;
}

// Define the state and actions
type ProductStore = {
  productData: ProductData;

  updateProductData: (newData: Partial<ProductData>) => void;
  resetProductData: () => void;
  getProductData: () => ProductData;
}

const initialData: ProductData = {
  selectedImageId: null,
  productName: '',
  aboutProduct: '',
  productWeight: '',
  bagsPerUnit: 1,
  pricePerUnit: '',
  quantity: '',
}

const useProductStore = create<ProductStore>((set, get) => ({
  productData: initialData,

  updateProductData: (newData) =>
    set((state) => ({
      productData: {
        ...state.productData,
        ...newData,
      },
    })),

  resetProductData: () => set({ productData: initialData }),

  getProductData: () => get().productData,
}))

export default useProductStore
