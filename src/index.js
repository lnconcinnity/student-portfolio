import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './App.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// website analytics, will be implementing my own version soon or when network traffic starts on fluctuating
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
