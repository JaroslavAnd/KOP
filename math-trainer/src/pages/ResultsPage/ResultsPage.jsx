import Button from '../../components/Button/Button';
import styles from './ResultsPage.module.css';

const ResultsPage = ({ results, onRestart }) => {
  return (
    <div className={styles.resultsPage}>
      <h2>Гра завершена!</h2>
      <div className={styles.score}>
        <p>Ваш фінальний рахунок: <strong>{results.finalScore}</strong></p>
      </div>
      <Button onClick={onRestart}>
        Грати знову
      </Button>
    </div>
  );
};

export default ResultsPage;