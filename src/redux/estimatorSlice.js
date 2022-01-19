import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    guestNum: 50,
    isSideChecked: false,
    isEntreeChecked: false,
    isDessertChecked: false,
    costs: {
        costPerGuest: 14,
        sideCost: 100,
        entreeCost: 200,
        dessertCost: 300
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