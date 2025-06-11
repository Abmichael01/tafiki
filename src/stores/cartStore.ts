import { create } from 'zustand';
import { CartItem } from '@/types';

interface CartState {
  items: CartItem[];
  updateCart: (products: CartItem[]) => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
  isInCart: (productId: string) => boolean;
}

const useCartStore = create<CartState>()(
    (set, get) => ({
      items: [],
      
      // Single method to update entire cart from API response
      updateCart: (products) => {
        set({ items: products });
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price, 0);
      },

      getItemCount: () => {
        return get().items.length;
      },

      isInCart: (productId) => {
        return get().items.some((item) => item.product_id === productId);
      },
    }),
);

export default useCartStore;