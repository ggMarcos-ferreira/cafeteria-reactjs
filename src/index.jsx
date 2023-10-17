import React from 'react';
import App from './Components/App.jsx';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root')); // Substitua 'root' pelo ID do elemento onde você deseja renderizar seu aplicativo

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
