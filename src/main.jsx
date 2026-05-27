import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="boot-fallback">Booting Narendra OS</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
