import Button from '../../components/Button/Button';
import styles from './StartPage.module.css';

const StartPage = ({ onStart }) => {
  return (
    <div className={styles.startPage}>
      <h2>Ласкаво просимо до Математичного тренажера!</h2>
      <p>Перевірте свою швидкість та точність у розв'язанні прикладів.</p>
      <Button onClick={onStart}>
        Почати гру
      </Button>
    </div>
  );
};

export default StartPage;