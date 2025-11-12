import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SettingsProvider } from './context/SettingsContext.jsx';
import { BrowserRouter } from 'react-router-dom'; // 1. Імпортуємо

import './styles/variables.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>,
);