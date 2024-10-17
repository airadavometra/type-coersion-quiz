export type QuizQuestion = MultipleAnswersQuestion | ReorderQuestion;

export type MultipleAnswersQuestion = {
  type: "MultipleAnswersQuestion";
  expression: string;
  possibleAnswers: string[];
  correctAnswer: string;
};

export type ReorderQuestion = {
  type: "ReorderQuestion";
  expectedResult: string;
  expressionItems: string[];
  correctAnswer: string;
};
