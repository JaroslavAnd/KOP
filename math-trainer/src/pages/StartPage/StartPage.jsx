import { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './StartPage.module.css';

const StartPage = () => {
  const [difficulty, setDifficulty] = useState('medium');

  return (
    <div className={styles.startPage}>
      <h2>Ласкаво просимо!</h2>
      <p>Оберіть рівень складності, щоб почати гру.</p>
      
      <div className={styles.settings}>
        <p>Поточний рівень: <strong>{difficulty}</strong></p>
      </div>

      <Button onClick={() => alert('Гра починається!')}>
        Почати гру
      </Button>
    </div>
  );
};

export default StartPage;