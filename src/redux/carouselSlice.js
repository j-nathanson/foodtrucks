import { createSlice } from '@reduxjs/toolkit';
import CAROUSEL_ITEMS from '../shared/carousel';

const initialState = {
    CAROUSEL_ITEMS,
}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        test: (state) => state
    },
})

// export const { changeGuestNum, toggleSides, toggleEntrees, toggleDessert } = carouselSlice.actions

export default carouselSlice.reducer
