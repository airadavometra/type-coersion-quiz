import { SimpleQuizData } from '@app-types/simpleQuizData';
export const generateSimpleQuiz = (): SimpleQuizData => {
  return {
    expression: '1 + true + ""',
    possibleAnswers: ['2', '1', '0', '1true', 'true', 'NaN'],
    correctAnswer: '2',
  };
};
