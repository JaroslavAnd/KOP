import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import StartPage from './pages/StartPage/StartPage.jsx';
import GamePage from './pages/GamePage/GamePage.jsx';
import ProfilePage from './pages/ProfilePage/profilePage.jsx';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/profile/:userId" element={<ProfilePage />} />
        
        <Route path="/game" element={<GamePage />} />
        
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;