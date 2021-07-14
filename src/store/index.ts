import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from '@store/slices/example';

const reducer = {
  example: exampleReducer,
};

export const store = configureStore({
  reducer,
});
