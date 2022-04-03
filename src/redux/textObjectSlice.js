import { createSlice } from '@reduxjs/toolkit';
import TEXT_OBJECTS from './textObjects.js';

const initialState = {
    textObjects: TEXT_OBJECTS
}

export const textObjectSlice = createSlice({
    name: 'textObject',
    initialState,
    reducers: {}
})

export default textObjectSlice.reducer