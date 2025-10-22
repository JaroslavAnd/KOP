import { useGameLogic } from '../../hooks/useGameLogic';
import Button from '../../components/Button/Button';
import styles from './GamePage.module.css';

const GamePage = ({ onGameEnd }) => {
  const {
    timeLeft,
    score,
    currentProblem,
    userAnswer,
    setUserAnswer,
    handleAnswerSubmit,
  } = useGameLogic(onGameEnd);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAnswerSubmit();
    }
  };

  return (
    <div className={styles.gamePage}>
      <div className={styles.gameInfo}>
        <span>Час: {timeLeft}</span>
        <span>Рахунок: {score}</span>
      </div>
      
      {currentProblem && (
        <div className={styles.problem}>
          {currentProblem.a} {currentProblem.operator} {currentProblem.b} = ?
        </div>
      )}
      
      <input
        type="number"
        className={styles.answerInput}
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ваша відповідь"
        autoFocus
      />
      
      <Button onClick={handleAnswerSubmit}>
        Відповісти
      </Button>
    </div>
  );
};

export default GamePage;