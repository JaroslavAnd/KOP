import { useState } from 'react';
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
  const [gameState, setGameState] = useState('start'); 
  const [gameResults, setGameResults] = useState({ finalScore: 0 });
  const startGame = () => {
    setGameState('game');
  };
  const endGame = (results) => {
    setGameResults(results);
    setGameState('results');
  };
  const restartGame = () => {
    setGameState('start');
    setGameResults({ finalScore: 0 });
  };

  const renderPage = () => {
    switch (gameState) {
      case 'game':
        return <GamePage onGameEnd={endGame} />;
      case 'results':
        return <ResultsPage results={gameResults} onRestart={restartGame} />;
      default:
        return <StartPage onStart={startGame} />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;