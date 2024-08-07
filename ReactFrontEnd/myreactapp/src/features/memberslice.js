// src/features/memberSlice.js
import { createSlice } from '@reduxjs/toolkit';

const memberSlice = createSlice({
  name: 'members',
  initialState: {
    count: 0, // initial count based on your member list
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment , decrement ,reset } = memberSlice.actions;
export default memberSlice.reducer;
