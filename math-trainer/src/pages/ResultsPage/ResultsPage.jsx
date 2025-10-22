import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './ResultsPage.module.css';

const ResultsPage = () => {
  
  const [finalScore, setFinalScore] = useState(120);
  const [correctAnswers, setCorrectAnswers] = useState(12);
  const [totalQuestions, setTotalQuestions] = useState(15);

  return (
    <div className={styles.resultsPage}>
      <h2>Гра завершена!</h2>
      <div className={styles.score}>
        <p>Ваш фінальний рахунок: <strong>{finalScore}</strong></p>
      </div>
      <div className={styles.stats}>
        <p>Правильних відповідей: {correctAnswers} з {totalQuestions}</p>
      </div>
      <Button onClick={() => alert('Починаємо нову гру!')}>
        Грати знову
      </Button>
    </div>
  );
};

export default ResultsPage;