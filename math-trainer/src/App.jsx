import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import CookieConsent from "react-cookie-consent";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/profile/:userName" element={<ProfilePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
       <CookieConsent
        location="bottom"
        buttonText="Я погоджуюсь"
        cookieName="mathTrainerConsent"
        style={{ background: "#2B373B", alignItems: "center" }}
        buttonStyle={{ 
          color: "#4e503b", 
          fontSize: "13px", 
          borderRadius: "5px", 
          fontWeight: "bold" 
        }}
        expires={150} 
      >
        Цей сайт використовує локальне сховище для збереження вашого прогресу.{" "}
        <Link 
          to="/privacy-policy"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Читати політику конфіденційності
        </Link>
      </CookieConsent>
    </Layout>
  );
}

export default App;