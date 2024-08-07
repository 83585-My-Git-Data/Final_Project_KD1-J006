// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import memberReducer from '../features/memberslice';

export const store = configureStore({
  reducer: {
    members: memberReducer,
  },
});
