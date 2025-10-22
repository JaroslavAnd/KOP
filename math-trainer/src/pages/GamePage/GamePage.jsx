import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './GamePage.module.css';

const GamePage = () => {

  const [currentProblem, setCurrentProblem] = useState('12 + 8 = ?');
  const [userAnswer, setUserAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);

  return (
    <div className={styles.gamePage}>
      <div className={styles.gameInfo}>
        <span>Час: {timeLeft}</span>
        <span>Рахунок: {score}</span>
      </div>
      
      <div className={styles.problem}>
        {currentProblem}
      </div>
      
      <input
        type="text"
        className={styles.answerInput}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Ваша відповідь"
      />
      
      <Button onClick={() => alert('Відповідь прийнято!')}>
        Відповісти
      </Button>
    </div>
  );
};

export default GamePage;