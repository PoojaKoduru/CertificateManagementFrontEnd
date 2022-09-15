import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';
import SecondComponent from './SecondComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyComponent/>
    <SecondComponent/>
    <MyComponent/>
    <SecondComponent/>
    <MyComponent/>
    <SecondComponent/>
  </React.StrictMode>
);

