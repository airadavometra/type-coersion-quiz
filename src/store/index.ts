import { configureStore } from '@reduxjs/toolkit';
import { evalGameReducer, simpleQuizReducer } from '@store/slices/example';

const reducer = {
  simpleQuizStore: simpleQuizReducer,
  evalGameStore: evalGameReducer,
};

export const store = configureStore({
  reducer,
});
