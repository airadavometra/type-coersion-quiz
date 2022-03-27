import { CatQuizData } from '@app-types/catQuizData';
import { createSlice } from '@reduxjs/toolkit';
import { generateCatQuiz } from 'util/generateCatQuiz';

interface State {
  complexity: number;
  expression: CatQuizData;
  selectedAnswer: string;
  resolved: boolean;
  isCorrect?: boolean;
}

const initialQuizData = generateCatQuiz(2);

const initialState: State = {
  complexity: 2,
  expression: initialQuizData,
  selectedAnswer: initialQuizData?.expressionItems.join(''),
  resolved: false,
  isCorrect: undefined,
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
      state.selectedAnswer = expression.expressionItems.join('');
      state.resolved = false;
      state.isCorrect = undefined;
    },
    setSelectedAnswer: (state, { payload: selectedAnswer }) => {
      state.selectedAnswer = selectedAnswer;
    },
    resolveExpression: (state, { payload: isCorrect }) => {
      state.resolved = true;
      state.isCorrect = isCorrect;
    },
  },
});

export const catQuizReducer = slice.reducer;
export const catQuizActions = slice.actions;
