import { configureStore } from '@reduxjs/toolkit';
import estimatorReducer from './estimatorSlice';
import carouselReducer from './carouselSlice';
import textObjectReducer from './textObjectSlice';
import foodTruckReducer from './foodTruckSlice'
import formSlice from './formSlice';

export const store = configureStore({
    reducer: {
        estimatorReducer,
        carouselReducer,
        textObjectReducer,
        foodTruckReducer,
        formSlice,
    },
})