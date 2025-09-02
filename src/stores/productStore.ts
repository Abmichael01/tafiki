// stores/productStore.ts
import { ShopProduct } from '@/types';
import { create } from 'zustand'

// Define the shape of product data for the store (extends ShopProduct but with File[] images)
export type ProductData = Omit<ShopProduct, 'images'> & {
  images: File[];
}

// Define the state and actions
type ProductStore = {
  productData: ProductData;

  updateProductData: (newData: Partial<ProductData>) => void;
  addImage: (file: File) => void;
  removeImage: (index: number) => void;
  resetProductData: () => void;
  getProductData: () => ProductData;
  prepareFormData: (additionalData?: Partial<ProductData>) => FormData;
}

const initialData: ProductData = {
  images: [],
  company_name: '',
  name: '',
  description: '',
  price: '',
  stock_quantity: '',
  roi_percentage: '',
  quantity_per_unit: '',
  kg_per_unit: '',
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

  addImage: (file: File) =>
    set((state) => ({
      productData: {
        ...state.productData,
        images: [...state.productData.images, file],
      },
    })),

  removeImage: (index: number) =>
    set((state) => ({
      productData: {
        ...state.productData,
        images: state.productData.images.filter((_, i) => i !== index),
      },
    })),

  resetProductData: () => set({ productData: initialData }),

  getProductData: () => get().productData,

  prepareFormData: (additionalData = {}) => {
    const { productData } = get();
    
    // Merge store data with any additional data passed in
    const completeData = {
      ...productData,
      ...additionalData,
    };
    
    const formData = new FormData();
    
    // Add images to FormData
    completeData.images.forEach((file) => {
      formData.append(`images`, file);
    });
    
    // Add other product data
    formData.append('company_name', completeData.company_name || '');
    formData.append('name', completeData.name);
    formData.append('description', completeData.description);
    formData.append('price', completeData.price);
    formData.append('stock_quantity', completeData.stock_quantity as string);
    formData.append('roi_percentage', completeData.roi_percentage as string);
    formData.append('quantity_per_unit', completeData.quantity_per_unit as string );
    formData.append('kg_per_unit', completeData.kg_per_unit as string);
    
    return formData;
  },
}))

export default useProductStore
