import { GET_OPERAND_FUNCTIONS } from "../constants/operands";
import {
  BINARY_OPERATORS,
  LEFT_SIDE_UNARY_OPERATORS,
} from "../constants/operators";
import { MultipleAnswersQuestion } from "../types/quizQuestion";
import { getRandomInteger } from "./getRandomInteger";

const shuffle = function (array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const num = Math.floor(Math.random() * (i + 1));
    const d = array[num];
    array[num] = array[i];
    array[i] = d;
  }
  return array;
};

const generatePossibleAnswers = (correctAnswer: string) => {
  const answers = new Set<string>();
  answers.add(correctAnswer);
  while (answers.size != 6) {
    answers.add(
      GET_OPERAND_FUNCTIONS[getRandomInteger(0, GET_OPERAND_FUNCTIONS.length)]()
    );
  }

  return shuffle([...answers]);
};

const getMultipleAnswersQuestionInternal = (
  complexity: number
): MultipleAnswersQuestion => {
  let expression = "";
  const operandsAmount = complexity;
  const selectedOperands: string[] = [];
  for (let i = 0; i < operandsAmount; i++) {
    const operandIndex = getRandomInteger(0, GET_OPERAND_FUNCTIONS.length);
    let operand = GET_OPERAND_FUNCTIONS[operandIndex]();
    const needUnaryOperator = getRandomInteger(0, 2);
    if (needUnaryOperator) {
      const leftSide = getRandomInteger(0, 2);
      if (leftSide) {
        const leftSideOperatorIndex = getRandomInteger(
          0,
          LEFT_SIDE_UNARY_OPERATORS.length
        );
        operand = `${LEFT_SIDE_UNARY_OPERATORS[leftSideOperatorIndex]}${operand}`;
      } else {
        // const rightSideOperatorIndex = randomInteger(0, rightSideUnaryOperators.length);
        // operand = `${rightSideUnaryOperators[rightSideOperatorIndex]}${operand}`;
      }
    }
    selectedOperands.push(operand);
  }
  expression = selectedOperands.pop() as string;
  for (let i = 0; i < operandsAmount - 1; i++) {
    const operatorIndex = getRandomInteger(0, BINARY_OPERATORS.length);
    const operator = BINARY_OPERATORS[operatorIndex];
    const needParentheses =
      i === operandsAmount - 2 ? 0 : getRandomInteger(0, 2);
    if (needParentheses) {
      expression = `(${expression} ${operator} ${
        selectedOperands.pop() as string
      })`;
    } else {
      expression = `${expression} ${operator} ${
        selectedOperands.pop() as string
      }`;
    }
  }
  const correctAnswerRaw = eval(expression);
  let correctAnswer = "";
  if (typeof correctAnswerRaw === "string") {
    correctAnswer = `"${String(eval(expression))}"`;
  } else {
    correctAnswer = String(eval(expression));
  }
  return {
    expression: expression,
    possibleAnswers: generatePossibleAnswers(correctAnswer),
    correctAnswer: correctAnswer,
    type: "MultipleAnswersQuestion",
  };
};

export const getMultipleAnswersQuestion = (
  complexity: number
): MultipleAnswersQuestion => {
  while (true) {
    try {
      return getMultipleAnswersQuestionInternal(complexity);
    } catch (ex) {
      console.debug(ex);
    }
  }
};
