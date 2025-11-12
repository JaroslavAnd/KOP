import { useGameLogic } from '../../hooks/useGameLogic.js';
import Button from '../../components/Button/Button.jsx';
import Modal from '../../components/Modal/Modal.jsx'; 
import styles from './GamePage.module.css';

const GamePage = ({ onGoToHome }) => {
  const {
    timeLeft,
    score,
    currentProblem,
    userAnswer,
    isGameOver, 
    setUserAnswer,
    handleAnswerSubmit,
    restartGame, 
  } = useGameLogic();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAnswerSubmit();
    }
  };

  return (
    <> 
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

      <Modal isOpen={isGameOver}>
        <h2>Гра завершена!</h2>
        <p>Ваш фінальний рахунок: <strong>{score}</strong></p>
        <div className={styles.modalActions}>
          <Button onClick={restartGame}>
            Грати цей раунд заново
          </Button>
          <Button onClick={onGoToHome}>
            Наступний тур (інші налаштування)
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default GamePage;