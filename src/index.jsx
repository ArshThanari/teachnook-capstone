import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import SE03 from './pages/products/SE03';
import SE03Lite from './pages/products/SE03Lite';
import SE03Max from './pages/products/SE03Max';
import Compare from './pages/products/Compare';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/se03" element={<SE03 />} />
        <Route path="/products/se03-lite" element={<SE03Lite />} />
        <Route path="/products/se03-max" element={<SE03Max />} />
        <Route path="/products/compare" element={<Compare />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
