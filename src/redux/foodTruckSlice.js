import { createSlice } from '@reduxjs/toolkit';
import FOOD_TRUCKS from '../shared/foodTrucks';

const initialState = {
    foodTrucks: FOOD_TRUCKS
}

export const foodTruckSlice = createSlice({
    name: 'foodTrucks',
    initialState,
    reducers: {}
})


export default foodTruckSlice.reducer;