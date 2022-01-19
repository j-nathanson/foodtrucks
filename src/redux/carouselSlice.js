import { createSlice } from '@reduxjs/toolkit';
import CAROUSEL_ITEMS from '../shared/carousel';

const initialState = {
    carouselItems: CAROUSEL_ITEMS,
    activeIndex: 0
}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload
        }
    },
})

export const { setActiveIndex } = carouselSlice.actions

export default carouselSlice.reducer
