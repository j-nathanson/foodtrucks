import { configureStore } from '@reduxjs/toolkit';
import estimatorReducer from './estimatorSlice';
import carouselReducer from './carouselSlice';
import textObjectReducer from './textObjectSlice';
export const store = configureStore({
    reducer: {
        estimatorReducer,
        carouselReducer,
        textObjectReducer
    },
})