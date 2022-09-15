import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {FavouritesContextProvider} from './components/store/FavouritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
  
);

