import React from 'react';
import ReactDOM from 'react-dom/client';
import Cardapio from './pages/Cardapio/cardapio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
);
