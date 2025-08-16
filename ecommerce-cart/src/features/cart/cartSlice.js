import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  isCartVisible: false,
  notification: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      state.notification = {
        status: 'success',
        title: 'Item added',
        message: `${newItem.name} added to cart!`,
      };
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
      state.notification = {
        status: 'info',
        title: 'Item removed',
        message: `${existingItem.name} removed from cart!`,
      };
    },
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    clearNotification(state) {
      state.notification = null;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;