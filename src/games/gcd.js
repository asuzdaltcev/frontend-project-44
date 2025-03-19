import runGame from '../index.js';

// Функция для вычисления НОД (алгоритм Евклида)
const getGCD = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

// Функция для генерации случайного числа в диапазоне min-max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = String(getGCD(num1, num2));

  return [`${num1} ${num2}`, correctAnswer];
};

const startGameGCD = () => runGame(gameRules, generateRound);

export default startGameGCD;
