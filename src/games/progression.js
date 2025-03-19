import runGame from '../index.js';

// Функция для генерации случайного числа в диапазоне min-max
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для генерации арифметической прогрессии
const generateProgression = (start, step, length) => Array.from({ length }, (_, i) => start + i * step);

const gameRules = 'What number is missing in the progression?';

const generateRound = () => {
  const length = getRandomNumber(5, 10); // Длина прогрессии от 5 до 10
  const start = getRandomNumber(1, 50); // Начальное число
  const step = getRandomNumber(2, 10); // Шаг прогрессии
  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1); // Индекс скрытого числа
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

const startGameProgression = () => runGame(gameRules, generateRound);

export default startGameProgression;
