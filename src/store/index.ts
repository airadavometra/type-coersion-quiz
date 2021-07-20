import { configureStore } from '@reduxjs/toolkit';
import { simpleQuizReducer } from '@store/slices/example';

const reducer = {
  simpleQuizStore: simpleQuizReducer,
};

export const store = configureStore({
  reducer,
});
