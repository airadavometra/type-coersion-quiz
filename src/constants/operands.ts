import { generate } from "random-words";
import { getRandomInteger } from "../utils/getRandomInteger";

const getRandomNumber = () => {
  const isWholeNumber = Math.random() < 0.7;

  const random = getRandomInteger(-999, 999);

  if (isWholeNumber) {
    return Math.round(random).toString();
  } else {
    return (Math.round(random * 100) / 100).toString();
  }
};

const getRandomWord = () => {
  return generate({ minLength: 2, maxLength: 6 });
};

export const GET_OPERAND_FUNCTIONS = [
  () => getRandomNumber(),
  () => "0",
  () => "-0",
  () => {
    const randomWord = getRandomWord();
    return `"${randomWord}"`;
  },
  () => '"0"',
  () => '"-0"',
  () => '""',
  () => {
    const randomNumber = getRandomNumber();

    return `"${randomNumber}"`;
  },
  () => '"true"',
  () => '"false"',
  () => "true",
  () => "false",
  () => "NaN",
  () => "undefined",
  () => "null",
  () => "Infinity",
  () => "-Infinity",
  () => "[]",
  () => "[0]",
  () => "[-0]",
  () => {
    const randomNumber = getRandomNumber();

    return `[${randomNumber}]`;
  },
  () => "[0, 1]",
  () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();

    return `[${randomNumber1}, ${randomNumber2}]`;
  },
  () => {
    const randomWord1 = getRandomWord();
    const randomWord2 = getRandomWord();

    return `[${randomWord1}, ${randomWord2}]`;
  },
  () => "function foo(){}",
  () => "{}",
  () => {
    const randomNumber = getRandomNumber();

    return `{value: "${randomNumber}"}`;
  },
];
