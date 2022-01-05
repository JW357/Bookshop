import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShopIcon } from '../../assets/shop.svg';
import { ReactComponent as CartLogo } from '../../assets/cart.svg';

function Form() {
  return (
    <section className="Form">
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Link
          to="/cart"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.4rem', width: '25rem',
          }}
        >
          <CartLogo style={{ width: '2rem', height: '2rem', margin: '0.5rem' }} />
          Koszyk
        </Link>
        <h2> Formularz zamówieniowy </h2>
        <Link
          to="/"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.4rem', width: '25rem',
          }}
        >
          <ShopIcon style={{ width: '2rem', height: '2rem', marginRight: '1rem' }} />
          Strona główna
        </Link>
      </div>
    </section>
  );
}

export default Form;
