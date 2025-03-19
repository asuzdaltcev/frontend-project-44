import runGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
  }

  return [`${num1} ${operator} ${num2}`, String(correctAnswer)];
};

const startCalcGame = () => runGame(gameRules, generateRound);

export default startCalcGame;
