import { CatQuizData } from '@app-types/catQuizData';
import { createSlice } from '@reduxjs/toolkit';
import { generateCatQuiz } from 'util/generateCatQuiz';

interface State {
  expression: CatQuizData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
}

const initialState: State = {
  expression: generateCatQuiz(2),
  selectedAnswer: null,
  resolved: false,
};
const slice = createSlice({
  name: 'catQuizSlice',
  initialState,
  reducers: {
    setExpression: (state, { payload: expression }) => {
      state.expression = expression;
      state.selectedAnswer = null;
      state.resolved = false;
    },
    setSelectedAnswer: (state, { payload: selectedAnswer }) => {
      state.selectedAnswer = selectedAnswer;
    },
    resolveExpression: (state) => {
      state.resolved = true;
    },
  },
});

export const catQuizReducer = slice.reducer;
export const catQuizActions = slice.actions;
