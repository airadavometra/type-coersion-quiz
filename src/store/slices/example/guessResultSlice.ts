import { ExpressionData } from '@app-types/expressionData';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  expression: ExpressionData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
}

const initialState: State = {
  expression: undefined,
  selectedAnswer: null,
  resolved: false,
};
const slice = createSlice({
  name: 'guessResultSlice',
  initialState,
  reducers: {
    setExpression: (state, { payload: expression }) => {
      state.expression = expression;
    },
    setSelectedAnswer: (state, { payload: selectedAnswer }) => {
      state.selectedAnswer = selectedAnswer;
    },
    resolveExpression: (state) => {
      state.resolved = true;
    },
  },
});

export const exampleReducer = slice.reducer;
export const exampleActions = slice.actions;
