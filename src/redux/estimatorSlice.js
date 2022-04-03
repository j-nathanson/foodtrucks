import { createSlice } from '@reduxjs/toolkit';
import CATERING from './catering';

const initialState = {
    guestNum: CATERING.sliderGuestValue,
    isSideChecked: false,
    isEntreeChecked: false,
    isDessertChecked: false,
    costs: {
        costPerGuest: CATERING.costPerGuest,
        sideCost: CATERING.sideCost,
        entreeCost: CATERING.entreeCost,
        dessertCost: CATERING.dessertCost
    }
}

export const estimatorSlice = createSlice({
    name: 'estimator',
    initialState,
    reducers: {
        changeGuestNum: (state, action) => {
            state.guestNum = action.payload
        },
        toggleSides: state => {
            state.isSideChecked = !state.isSideChecked
        },
        toggleEntrees: state => {
            state.isEntreeChecked = !state.isEntreeChecked
        },
        toggleDessert: state => {
            state.isDessertChecked = !state.isDessertChecked
        }

    },
})

export const { changeGuestNum, toggleSides, toggleEntrees, toggleDessert } = estimatorSlice.actions

export default estimatorSlice.reducer