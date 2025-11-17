import { useGameStore } from '../../store/useGameStore';
import Button from '../../components/Button/Button.jsx';
import styles from './ResultsPage.module.css';

const ResultsPage = () => {
  const results = useGameStore((state) => state.results);
  const clearResults = useGameStore((state) => state.clearResults);

  const sortedResults = [...results].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={styles.resultsPage}>
      <h2>Глобальна Таблиця Результатів</h2>
      {results.length === 0 ? (
        <p>Ви ще не зіграли жодної гри.</p>
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Гравець</th> 
                <th>Рахунок</th>
                <th>Складність</th>
                <th>Час (сек)</th>
                <th>Дата</th> 
              </tr>
            </thead>
            <tbody>
              {sortedResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.userName}</td>
                  <td>{result.score}</td>
                  <td>{result.difficulty}</td>
                  <td>{result.gameTime}</td>
                  <td>{new Date(result.date).toLocaleString()}</td> 
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={clearResults} className={styles.clearButton}>
            Очистити результати
          </Button>
        </>
      )}
    </div>
  );
};
export default ResultsPage;