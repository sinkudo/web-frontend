import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Импортируем только здесь
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> {/* Единственный роутер в приложении */}
      <App />
    </HashRouter>
  </React.StrictMode>
);