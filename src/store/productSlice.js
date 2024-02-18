// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: '',
        date: '',
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = (action.payload);
        },
        setDate : (state, action) => {
            state.date = (action.payload);
        },
        editProduct: (state, action) => {
            // Burada ürün düzenleme işlemini gerçekleştirin
        },
        deleteProduct: (state, action) => {
            // Burada ürün silme işlemini gerçekleştirin
        },
    },
});

export const { setProducts, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
