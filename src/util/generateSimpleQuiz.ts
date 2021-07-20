import { operands, possibleAnswers } from '@app-types/operands';
import { binaryOperators, leftSideUnaryOperators, rightSideUnaryOperators } from '@app-types/operators';
import { SimpleQuizData } from '@app-types/simpleQuizData';

function randomInteger(from: number, to: number) {
  const randomNumber = from + Math.random() * (to - from);
  return Math.floor(randomNumber);
}

Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const num = Math.floor(Math.random() * (i + 1));
    const d = this[num];
    this[num] = this[i];
    this[i] = d;
  }
  return this;
};

const generatePossibleAnswers = (correctAnswer: string) => {
  const answers = new Set();
  answers.add(correctAnswer);
  while (answers.size != 6) {
    answers.add(possibleAnswers[randomInteger(0, possibleAnswers.length)]);
  }

  return [...answers].shuffle();
};

export const generateSimpleQuiz = (): SimpleQuizData => {
  let expression = '';
  const operandsAmount = randomInteger(2, 6);
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
  expression = selectedOperands.pop() as string;
  for (let i = 0; i < operandsAmount - 1; i++) {
    const operatorIndex = randomInteger(0, binaryOperators.length);
    const operator = binaryOperators[operatorIndex];
    selectedOperators.push(operator);
    const needParentheses = i === operandsAmount - 2 ? 0 : randomInteger(0, 2);
    if (needParentheses) {
      expression = `(${expression} ${operator} ${selectedOperands.pop() as string})`;
    } else {
      expression = `${expression} ${operator} ${selectedOperands.pop() as string}`;
    }
  }
  const correctAnswer = eval(expression).toString();
  return {
    expression: expression,
    possibleAnswers: generatePossibleAnswers(correctAnswer),
    correctAnswer: correctAnswer,
  };
};
