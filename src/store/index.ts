import { configureStore } from '@reduxjs/toolkit';
import { catGameReducer, catQuizReducer, evalGameReducer, simpleQuizReducer } from '@store/slices';

const reducer = {
  simpleQuizStore: simpleQuizReducer,
  evalGameStore: evalGameReducer,
  catQuizStore: catQuizReducer,
  catGameStore: catGameReducer,
};

export const store = configureStore({
  reducer,
});
