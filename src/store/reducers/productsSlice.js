import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/products';

const initialState = {
  products: products,
  seletedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;

      state.seletedProduct = state.products.find(
        (p) => p.id === productId
      );
    },
  },
});
