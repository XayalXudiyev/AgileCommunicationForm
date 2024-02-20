
import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';
import productSlice from './productSlice';

export default configureStore({
    reducer: {
        content: contentReducer,
        products : productSlice
    },
});
