import { configureStore } from '@reduxjs/toolkit'
import estimatorReducer from './estimatorSlice'

export const store = configureStore({
    reducer: {
        estimatorReducer,
    },
})