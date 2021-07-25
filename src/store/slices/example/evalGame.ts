import { createSlice } from '@reduxjs/toolkit';

interface State {
  currentScore: number;
  maxScore: number;
}

const initialState: State = {
  currentScore: 0,
  maxScore: 0,
};
const slice = createSlice({
  name: 'eval game state',
  initialState,
  reducers: {
    addPoints: (state, { payload: points }) => {
      state.currentScore += points;
    },
    resetScore: (state) => {
      state.currentScore = 0;
    },
    setMaxScore: (state, { payload: score }) => {
      state.maxScore = score;
    },
  },
});

export const evalGameReducer = slice.reducer;
export const evalGameActions = slice.actions;
