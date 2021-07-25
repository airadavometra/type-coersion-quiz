import { SimpleQuizData } from '@app-types/simpleQuizData';
import { createSlice } from '@reduxjs/toolkit';
import { generateSimpleQuiz } from 'util/generateSimpleQuiz';

interface State {
  expression: SimpleQuizData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
}

const initialState: State = {
  expression: generateSimpleQuiz(),
  selectedAnswer: null,
  resolved: false,
};
const slice = createSlice({
  name: 'game state',
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

export const simpleQuizReducer = slice.reducer;
export const simpleQuizActions = slice.actions;
