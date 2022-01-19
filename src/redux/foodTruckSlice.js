import { createSlice } from '@reduxjs/toolkit';
import FOOD_TRUCKS from '../shared/foodTrucks';

const initialState = {
    foodTrucks: FOOD_TRUCKS,
    choice: "everything"
}

export const foodTruckSlice = createSlice({
    name: 'foodTrucks',
    initialState,
    reducers: {
        setChoice: (state, action) => {
            if (action.payload === "everything") {
                state.foodTrucks = initialState.foodTrucks
            } else {
                state.foodTrucks = initialState.foodTrucks
                state.foodTrucks = state.foodTrucks.filter(foodTruck => foodTruck.cuisine === action.payload)
            }
        }
    }
})

export const { setChoice } = foodTruckSlice.actions

export default foodTruckSlice.reducer;