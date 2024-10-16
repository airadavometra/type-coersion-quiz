import { OPERANDS } from "../constants/operands";
import {
  BINARY_OPERATORS,
  LEFT_SIDE_UNARY_OPERATORS,
} from "../constants/operators";
import { ReorderQuestion } from "../types/quizQuestion";
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

const getReorderQuestionInternal = (complexity: number): ReorderQuestion => {
  let expression = "";
  const operandsAmount = complexity;
  const selectedOperands: string[] = [];
  const selectedOperators: string[] = [];
  for (let i = 0; i < operandsAmount; i++) {
    const operandIndex = getRandomInteger(0, OPERANDS.length);
    let operand = OPERANDS[operandIndex];
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
  const selectedOperandsCopy = selectedOperands.slice();
  expression = selectedOperands.pop() as string;
  for (let i = 0; i < operandsAmount - 1; i++) {
    const operatorIndex = getRandomInteger(0, BINARY_OPERATORS.length);
    const operator = BINARY_OPERATORS[operatorIndex];
    selectedOperators.push(operator);
    const needParentheses =
      i === operandsAmount - 2 ? 0 : getRandomInteger(0, 2);
    if (needParentheses) {
      const operand = selectedOperands.pop() as string;
      expression = `(${expression} ${operator} ${operand})`;
      selectedOperators.push("(");
      selectedOperators.push(")");
    } else {
      const operand = selectedOperands.pop() as string;
      expression = `${expression} ${operator} ${operand}`;
    }
  }
  const expectedResultRaw = eval(expression);
  let expectedResult = "";
  if (typeof expectedResultRaw === "string") {
    expectedResult = `"${String(eval(expression))}"`;
  } else {
    expectedResult = String(eval(expression));
  }
  return {
    expressionItems: shuffle([...selectedOperandsCopy, ...selectedOperators]),
    expectedResult: expectedResult,
    correctAnswer: expression,
    type: "ReorderQuestion",
  };
};

export const getReorderQuestion = (complexity: number): ReorderQuestion => {
  while (true) {
    try {
      return getReorderQuestionInternal(complexity);
    } catch (ex) {
      console.debug(ex);
    }
  }
};
