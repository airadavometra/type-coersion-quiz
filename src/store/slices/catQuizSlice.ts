import { CatQuizData } from '@app-types/catQuizData';
import { createSlice } from '@reduxjs/toolkit';
import { generateCatQuiz } from 'util/generateCatQuiz';

interface State {
  complexity: number;
  expression: CatQuizData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
}

const initialState: State = {
  complexity: 3,
  expression: generateCatQuiz(3),
  selectedAnswer: null,
  resolved: false,
};
const slice = createSlice({
  name: 'catQuizSlice',
  initialState,
  reducers: {
    setComplexity: (state, { payload: complexity }) => {
      state.complexity = complexity;
    },
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
