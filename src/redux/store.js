import { configureStore } from '@reduxjs/toolkit'
import estimatorReducer from '../redux/estimatorSlice'



export const store = configureStore({
    reducer: {
        estimatorReducer,
    },
})