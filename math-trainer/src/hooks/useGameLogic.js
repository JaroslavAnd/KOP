import { useState, useEffect, useCallback } from 'react';

const GAME_DURATION = 30; 

export const useGameLogic = (onGameEnd) => {
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isGameActive, setIsGameActive] = useState(true);

  const generateProblem = useCallback(() => {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a, b;

    if (operator === '*') {
      a = Math.floor(Math.random() * 9) + 1; 
      b = Math.floor(Math.random() * 9) + 1; 
    } else {
      a = Math.floor(Math.random() * 20) + 1; 
      b = Math.floor(Math.random() * 20) + 1; 
    }
    
    if (operator === '-' && a < b) {
      [a, b] = [b, a]; 
    }

    setCurrentProblem({ a, b, operator });
  }, []);

  useEffect(() => {
    generateProblem();
  }, [generateProblem]);

  useEffect(() => {
    if (!isGameActive) return;

    if (timeLeft === 0) {
      setIsGameActive(false);
      onGameEnd({ finalScore: score }); 
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); 
  }, [timeLeft, isGameActive, score, onGameEnd]);

  const handleAnswerSubmit = () => {
    if (!userAnswer) return;

    const { a, b, operator } = currentProblem;
    let correctAnswer;

    switch (operator) {
      case '+':
        correctAnswer = a + b;
        break;
      case '-':
        correctAnswer = a - b;
        break;
      case '*':
        correctAnswer = a * b;
        break;
      default:
        return;
    }

    if (parseInt(userAnswer, 10) === correctAnswer) {
      setScore((prevScore) => prevScore + 10);
    }

    setUserAnswer('');
    generateProblem();
  };

  return {
    timeLeft,
    score,
    currentProblem,
    userAnswer,
    isGameActive,
    setUserAnswer,
    handleAnswerSubmit,
  };
};