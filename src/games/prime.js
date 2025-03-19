import runGame from '../index.js';

// Функция проверки, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

// Генерация вопроса и правильного ответа
const generateRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

// Правила игры
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Запуск игры
const runPrimeGame = () => runGame(gameRules, generateRound);

export default runPrimeGame;
