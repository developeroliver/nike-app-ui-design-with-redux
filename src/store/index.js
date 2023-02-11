import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducers/cartSlice';
import { productsSlice } from './reducers/productsSlice';

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
