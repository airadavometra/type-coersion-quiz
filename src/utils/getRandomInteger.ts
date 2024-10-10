export const getRandomInteger = (from: number, to: number) => {
  const randomNumber = from + Math.random() * (to - from);
  return Math.floor(randomNumber);
};
