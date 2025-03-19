import runGame from '../index.js';

// Функция для вычисления НОД (алгоритм Евклида)
const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
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
