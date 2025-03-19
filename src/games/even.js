import runGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
};

const startEvenGame = () => runGame(gameRules, generateRound);

export default startEvenGame;
