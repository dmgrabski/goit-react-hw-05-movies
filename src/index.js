import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // Zmieniono na HashRouter
import App from './components/App';
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Opakowanie komponentu App w Router */}
      <App />
    </Router>
  </React.StrictMode>
);
