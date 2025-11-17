import { useState, useEffect, useCallback } from 'react';
import { useGameStore } from '../store/useGameStore';

export const useGameLogic = () => {
  const settings = useGameStore((state) => state.settings);
  const addResult = useGameStore((state) => state.addResult);
  const currentUser = useGameStore((state) => state.currentUser);
  
  const [timeLeft, setTimeLeft] = useState(settings.gameTime);
  const [score, setScore] = useState(0);
 
  const [currentProblem, setCurrentProblem] = useState({ text: 'Завантаження...', answer: 0 }); 
  const [userAnswer, setUserAnswer] = useState('');
  const [isGameActive, setIsGameActive] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const generateProblem = useCallback(() => {
    let a, b, operator, problemText, correctAnswer;

    const difficulty = settings.difficulty;

    if (difficulty === 'easy') {
     
      operator = '+';
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      correctAnswer = a + b;
      problemText = `${a} + ${b}`;

    } else if (difficulty === 'medium') {
    
      const operators = ['+', '-', '*'];
      operator = operators[Math.floor(Math.random() * operators.length)];

      if (operator === '*') {
       
        a = Math.floor(Math.random() * 11) + 2; 
        b = Math.floor(Math.random() * 11) + 2; 
        correctAnswer = a * b;
        problemText = `${a} × ${b}`; 
      } else {
       
        a = Math.floor(Math.random() * 30) + 1;
        b = Math.floor(Math.random() * 30) + 1;
        if (operator === '-' && a < b) {
          [a, b] = [b, a]; 
        }
        correctAnswer = (operator === '+') ? a + b : a - b;
        problemText = `${a} ${operator} ${b}`;
      }

    } else { 
  
      const operators = ['+', '-', '*', '/'];
      operator = operators[Math.floor(Math.random() * operators.length)];

      if (operator === '/') {
     
        const result = Math.floor(Math.random() * 10) + 2; 
        b = Math.floor(Math.random() * 10) + 2;          
        a = result * b; 
        correctAnswer = result;
        problemText = `${a} ÷ ${b}`; 
      } else if (operator === '*') {

        a = Math.floor(Math.random() * 16) + 5; 
        b = Math.floor(Math.random() * 16) + 5; 
        correctAnswer = a * b;
        problemText = `${a} × ${b}`;
      } else {
        a = Math.floor(Math.random() * 91) + 10; 
        b = Math.floor(Math.random() * 91) + 10; 
        if (operator === '-' && a < b) {
          [a, b] = [b, a]; 
        }
        correctAnswer = (operator === '+') ? a + b : a - b;
        problemText = `${a} ${operator} ${b}`;
      }
    }

    setCurrentProblem({
      text: problemText,
      answer: correctAnswer,
    });
    
  }, [settings.difficulty]);


  useEffect(() => {
    generateProblem();
  }, [generateProblem]);

  useEffect(() => {
    if (!isGameActive) return;
    if (timeLeft === 0) {
      setIsGameActive(false); 
      setIsGameOver(true);    
      addResult({
        score: score,
        difficulty: settings.difficulty,
        gameTime: settings.gameTime,
        userName: currentUser,
        date: new Date().toISOString(),
      });
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, isGameActive, score, settings, addResult, currentUser]);

  const handleAnswerSubmit = () => {
    if (!isGameActive || !userAnswer) return;

    if (parseInt(userAnswer, 10) === currentProblem.answer) {
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
    isGameActive, 
    setUserAnswer,
    handleAnswerSubmit,
    restartGame,
  };
};