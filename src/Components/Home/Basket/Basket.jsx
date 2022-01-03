import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShopIcon } from './shop.svg';

function Basket() {
  return (
    <div
      className="Basket"
      style={{
        display: 'flex', marginLeft: '2rem', color: 'white', justifyContent: 'center',
      }}
    >
      <h1 style={{ color: 'white', marginRight: '2rem' }}> Koszyk </h1>
      <Link to="/"><ShopIcon style={{ width: '2rem', height: '2rem', margin: '0.5rem' }} /></Link>
    </div>
  );
}

export default Basket;
