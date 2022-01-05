import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Form from './Components/Form';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((item) => (item.id === product.id
        ? { ...exist, quantity: exist.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(cartItems.map((item) => (item.id === product.id
        ? { ...exist, quantity: exist.quantity - 1 } : item)));
    }
  };

  return (
    <div className="App" style={{ color: 'white' }}>
      <Routes>
        <Route path="*" element={<Home onAdd={onAdd} />} />
        <Route path="cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
