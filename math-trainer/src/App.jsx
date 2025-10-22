import { useState } from 'react';
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
 
  const [currentPage, setCurrentPage] = useState('start'); // 'start', 'game', 'results'

  const renderPage = () => {
    switch (currentPage) {
      case 'game':
        return <GamePage />;
      case 'results':
        return <ResultsPage />;
      default:
        return <StartPage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;