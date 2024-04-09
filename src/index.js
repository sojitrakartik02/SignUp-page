import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
