import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/client/App';
import './index.css';
import { BrowserRouter,HashRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
