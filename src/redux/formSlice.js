import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    form: {
        name: '',
        email: '',
        date: '',
        guests: 'small',
        foodTrucks: 'none',
        text: ''
    }

}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        postFeedback: (state, action) => {
            state.form = action.payload
        }
    }
})

export const { postFeedback } = formSlice.actions;

export default formSlice.reducer;