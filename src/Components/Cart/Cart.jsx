/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ReactComponent as ShopIcon } from '../../assets/shop.svg';

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const booksPrice = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  const taxPrice = booksPrice * 0.05;
  const shippingPrice = 12;
  const totalPrice = booksPrice + taxPrice + shippingPrice;

  return (
    <section style={{ height: '100vh' }}>
      <div
        style={{
          display: 'flex', marginLeft: '2rem', color: 'white', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem',
        }}
      >
        <h1 style={{ color: 'white', marginRight: '2rem' }}> Koszyk </h1>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.4rem' }}>
          <ShopIcon style={{ width: '2rem', height: '2rem', marginRight: '1rem' }} />
          Strona główna
        </Link>
      </div>
      <div>{cartItems.length === 0 && <div>Koszyk jest pusty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row" style={{ marginBottom: '1rem' }}>
          <div className="col-4 text-left">{item.title}</div>
          <div className="col-4">
            <Button variant="primary" type="button" onClick={() => onAdd(item)} className="add" style={{ marginRight: '0.5rem' }}>+</Button>
            <Button variant="primary" type="button" onClick={() => onRemove(item)} className="remove">-</Button>
          </div>
          <div className="col-4 text-right">
            {item.quantity}
            {' '}
            x
            {' '}
            {item.price}
            {'\u00A0'}
            PLN
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div>Items Price</div>
            <div>
              {booksPrice}
              {'\u00A0'}
              PLN

            </div>
          </div>
          <div className="row">
            <div>Tax Price</div>
            <div>
              {taxPrice}
              {'\u00A0'}
              PLN

            </div>
          </div>
          <div className="row">
            <div>Shipping Cost</div>
            <div>
              {shippingPrice}
              {'\u00A0'}
              PLN
            </div>
          </div>
          <div className="row">
            <div>Total</div>
            <div>
              {totalPrice}
              {' '}
              {'\u00A0'}
              PLN

            </div>
          </div>
        </>
      )}
      <Link to="/form"><Button variant="primary" style={{ padding: '2rem', marginTop: '2rem' }}> Zamawiam </Button></Link>
    </section>
  );
}

export default Cart;
