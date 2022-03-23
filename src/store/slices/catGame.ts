import { createSlice } from '@reduxjs/toolkit';

interface State {
  currentScore: number;
  maxScore: number;
  maxHearts: number;
  currentHearts: number;
  isGameOver: boolean;
}

const initialState: State = {
  currentScore: 0,
  maxScore: 0,
  maxHearts: 3,
  currentHearts: 3,
  isGameOver: false,
};
const slice = createSlice({
  name: 'cat game state',
  initialState,
  reducers: {
    addPoints: (state, { payload: points }) => {
      state.currentScore += points;
    },
    setMaxScore: (state, { payload: score }) => {
      state.maxScore = score;
    },
    removeHeart: (state) => {
      state.currentHearts--;
      if (state.currentHearts === 0) {
        state.isGameOver = true;
      }
    },
    resetGame: (state) => {
      state.currentScore = 0;
      state.currentHearts = 3;
      state.isGameOver = false;
    },
  },
});

export const catGameReducer = slice.reducer;
export const catGameActions = slice.actions;
