import { useState, useEffect, useCallback } from 'react';
import { useSettings } from '../context/SettingsContext'; 

export const useGameLogic = () => {
  const { settings } = useSettings(); 
  
  const [timeLeft, setTimeLeft] = useState(settings.gameTime);
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isGameActive, setIsGameActive] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const generateProblem = useCallback(() => {
    const operators = ['+', '-', '*'];
    let a, b, operator;

    switch (settings.difficulty) {
      case 'hard':
        a = Math.floor(Math.random() * 41) + 10; 
        b = Math.floor(Math.random() * 41) + 10;
        operator = operators[Math.floor(Math.random() * operators.length)];
        break;
      case 'medium':
        a = Math.floor(Math.random() * 20) + 1; 
        b = Math.floor(Math.random() * 20) + 1;
        operator = operators[Math.floor(Math.random() * operators.length)];
        break;
      default: 
        a = Math.floor(Math.random() * 10) + 1; 
        b = Math.floor(Math.random() * 10) + 1;
        operator = '+';
    }

    if (operator === '-' && a < b) {
      [a, b] = [b, a];
    }

    setCurrentProblem({ a, b, operator });
  }, [settings.difficulty]);

  useEffect(() => {
    generateProblem();
  }, [generateProblem]);

  useEffect(() => {
    if (!isGameActive) return;

    if (timeLeft === 0) {
      setIsGameActive(false);
      setIsGameOver(true); 
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isGameActive]);

  const handleAnswerSubmit = () => {
    if (!userAnswer) return;
    const { a, b, operator } = currentProblem;
    let correctAnswer;
    switch (operator) {
      case '+': correctAnswer = a + b; break;
      case '-': correctAnswer = a - b; break;
      case '*': correctAnswer = a * b; break;
      default: return;
    }

    if (parseInt(userAnswer, 10) === correctAnswer) {
      setScore((prevScore) => prevScore + 10);
    }
    setUserAnswer('');
    generateProblem();
  };

  const restartGame = () => {
    setTimeLeft(settings.gameTime);
    setScore(0);
    setIsGameOver(false);
    setIsGameActive(true);
    generateProblem();
  };

  return {
    timeLeft,
    score,
    currentProblem,
    userAnswer,
    isGameOver,
    setUserAnswer,
    handleAnswerSubmit,
    restartGame, 
  };
};