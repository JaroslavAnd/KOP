import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/profile/:userName" element={<ProfilePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;