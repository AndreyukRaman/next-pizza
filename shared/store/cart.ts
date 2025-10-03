'use client';

import { create } from 'zustand';
import { Api } from '@/shared/services/api-client';
import { CartStateItem, getCartDetails } from '@/shared/lib/get-cart-details';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  /* Получение товаров */
  fetchCartItems: () => Promise<void>;

  /*  Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  /* Запрс на добавление товара в корзину */
  // TODO!!! Типизировать values
  addCartItem: (values: any) => Promise<void>;

  /* Запрс на удаление товара из корзины */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      const cartDetails = getCartDetails(data);
      set(cartDetails);
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(id, quantity);
      const cartDetails = getCartDetails(data);
      set(cartDetails);
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {},
  addCartItem: async (values: any) => {},
}));
