import { useParams, Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import { useGameStore } from '../../store/useGameStore';

const ProfilePage = () => {
  const { userName } = useParams();
  
  const allResults = useGameStore((state) => state.results);

  const userResults = allResults
    .filter(r => r.userName === userName)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); 

  let stats = {
    totalGames: userResults.length,
    highScore: 0,
    avgScore: 0,
    favDifficulty: 'N/A',
  };

  if (stats.totalGames > 0) {
    stats.highScore = Math.max(...userResults.map(r => r.score));
    
    const totalScore = userResults.reduce((acc, r) => acc + r.score, 0);
    stats.avgScore = (totalScore / stats.totalGames).toFixed(1);
    
    const counts = userResults.reduce((acc, r) => {
      acc[r.difficulty] = (acc[r.difficulty] || 0) + 1;
      return acc;
    }, {});
    stats.favDifficulty = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  }

  return (
    <div className={styles.profile}>
      <h2>Профіль Гравця: <span>{userName}</span></h2>
      
      {stats.totalGames === 0 ? (
        <p>Гравець "{userName}" ще не зіграв жодної гри.</p>
      ) : (
        <>
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <h3>Загалом ігор</h3>
              <p>{stats.totalGames}</p>
            </div>
            <div className={styles.statBox}>
              <h3>Рекорд</h3>
              <p>{stats.highScore}</p>
            </div>
            <div className={styles.statBox}>
              <h3>Середній Рахунок</h3>
              <p>{stats.avgScore}</p>
            </div>
            <div className={styles.statBox}>
              <h3>Улюблений Рівень</h3>
              <p>{stats.favDifficulty}</p>
            </div>
          </div>
          
          <h3>Останні ігри:</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Рахунок</th>
                <th>Складність</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {userResults.slice(0, 10).map((result, index) => ( 
                <tr key={index}>
                  <td>{result.score}</td>
                  <td>{result.difficulty}</td>
                  <td>{new Date(result.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      
      <Link to="/" className={styles.homeLink}>На головну</Link>
    </div>
  );
};

export default ProfilePage;