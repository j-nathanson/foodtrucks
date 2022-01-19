import { configureStore } from '@reduxjs/toolkit'
import estimatorReducer from './estimatorSlice'
import carouselReducer from './carouselSlice'

export const store = configureStore({
    reducer: {
        estimatorReducer,
        carouselReducer
    },
})