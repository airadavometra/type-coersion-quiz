import { CatQuizData } from '@app-types/catQuizData';
import { operands } from '@app-types/operands';
import { binaryOperators, leftSideUnaryOperators } from '@app-types/operators';

function randomInteger(from: number, to: number) {
  const randomNumber = from + Math.random() * (to - from);
  return Math.floor(randomNumber);
}

const shuffle = function (array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const num = Math.floor(Math.random() * (i + 1));
    const d = array[num];
    array[num] = array[i];
    array[i] = d;
  }
  return array;
};

const generateCatQuizInternal = (complexity: number): CatQuizData => {
  let expression = '';
  const operandsAmount = complexity;
  const selectedOperands: string[] = [];
  const selectedOperators: string[] = [];
  for (let i = 0; i < operandsAmount; i++) {
    const operandIndex = randomInteger(0, operands.length);
    let operand = operands[operandIndex];
    const needUnaryOperator = randomInteger(0, 2);
    if (needUnaryOperator) {
      const leftSide = randomInteger(0, 2);
      if (leftSide) {
        const leftSideOperatorIndex = randomInteger(0, leftSideUnaryOperators.length);
        operand = `${leftSideUnaryOperators[leftSideOperatorIndex]}${operand}`;
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
    const operatorIndex = randomInteger(0, binaryOperators.length);
    const operator = binaryOperators[operatorIndex];
    selectedOperators.push(operator);
    const needParentheses = i === operandsAmount - 2 ? 0 : randomInteger(0, 2);
    if (needParentheses) {
      const operand = selectedOperands.pop() as string;
      expression = `(${expression} ${operator} ${operand})`;
      selectedOperators.push('(');
      selectedOperators.push(')');
    } else {
      const operand = selectedOperands.pop() as string;
      expression = `${expression} ${operator} ${operand}`;
    }
  }
  const expectedResultRaw = eval(expression);
  let expectedResult = '';
  if (typeof expectedResultRaw === 'string') {
    expectedResult = `"${String(eval(expression))}"`;
  } else {
    expectedResult = String(eval(expression));
  }
  return {
    expressionItems: shuffle([...selectedOperandsCopy, ...selectedOperators]),
    expectedResult: expectedResult,
    correctAnswer: expression,
  };
};

export const generateCatQuiz = (complexity: number): CatQuizData => {
  while (true) {
    try {
      return generateCatQuizInternal(complexity);
    } catch (ex) {
      console.debug(ex);
    }
  }
};
