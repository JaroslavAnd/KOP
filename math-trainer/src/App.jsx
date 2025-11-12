import { useState } from 'react';
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';

function App() {
  const [gameState, setGameState] = useState('start'); 

  const startGame = () => {
    setGameState('game');
  };
  
  const goToHome = () => {
    setGameState('start');
  };

  const renderPage = () => {
    switch (gameState) {
      case 'game':
        return <GamePage onGoToHome={goToHome} />;
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