import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Basket from './Components/Home/Basket';
import Home from './Components/Home';
import Form from './Components/Home/Form';

function App() {
  return (
    <div className="App" style={{ background: '#2b2b2b' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
