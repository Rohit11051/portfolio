import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Default to light mode if not already set
const htmlElement = document.documentElement;
const userPref = localStorage.getItem("theme");

if (userPref === "dark") {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);