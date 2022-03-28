import { operands, possibleAnswers } from '@app-types/operands';
import { binaryOperators, leftSideUnaryOperators } from '@app-types/operators';
import { SimpleQuizData } from '@app-types/simpleQuizData';

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

const generatePossibleAnswers = (correctAnswer: string) => {
  const answers = new Set<string>();
  answers.add(correctAnswer);
  while (answers.size != 6) {
    answers.add(possibleAnswers[randomInteger(0, possibleAnswers.length)]);
  }

  return shuffle([...answers]);
};

const generateSimpleQuizInternal = (complexity: number): SimpleQuizData => {
  let expression = '';
  const operandsAmount = complexity;
  const selectedOperands: string[] = [];
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
    const needParentheses = i === operandsAmount - 2 ? 0 : randomInteger(0, 2);
    if (needParentheses) {
      expression = `(${expression} ${operator} ${selectedOperands.pop() as string})`;
    } else {
      expression = `${expression} ${operator} ${selectedOperands.pop() as string}`;
    }
  }
  const correctAnswerRaw = eval(expression);
  let correctAnswer = '';
  if (typeof correctAnswerRaw === 'string') {
    correctAnswer = `"${String(eval(expression))}"`;
  } else {
    correctAnswer = String(eval(expression));
  }
  return {
    expression: expression,
    possibleAnswers: generatePossibleAnswers(correctAnswer),
    correctAnswer: correctAnswer,
  };
};

export const generateSimpleQuiz = (complexity: number): SimpleQuizData => {
  while (true) {
    try {
      return generateSimpleQuizInternal(complexity);
    } catch (ex) {
      console.debug(ex);
    }
  }
};
