/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Link } from 'react-router-dom';
import { ReactComponent as CartLogo } from '../../assets/cart.svg';

function Home(props) {
  const { onAdd } = props;
  const url = 'http://localhost:3001/api/book';
  const [book, setBook] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setBook(response.data);
      });
  }, [url]);

  if (book) {
    content = (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {book.data.map((position) => (
          <Card
            key={position.id}
            className="mb-3"
            style={{
              color: 'black', width: '40%', margin: '0 auto', background: '#d5cccc',
            }}
          >
            <Card.Body>
              <Card.Title>{position.title}</Card.Title>
              <Card.Text>
                Autor:
                {'\u00A0'}
                {position.author}
              </Card.Text>
              <Card.Text>
                Liczba stron:
                {'\u00A0'}
                {position.pages}
              </Card.Text>
              <Card.Img class="img-fluid" src={position.cover_url} alt="cover" />
              <h3>
                Cena:
                {'\u00A0'}
                {position.price}
                {'\u00A0'}
                {position.currency}
              </h3>
              <Button onClick={() => onAdd(position)} variant="secondary">Dodaj do koszyka</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div className="Home">
      <div style={{
        display: 'flex', justifyContent: 'center', position: 'sticky', top: '0', zIndex: '2', background: '#2b2b2b', height: '60px', marginBottom: '1.5rem',
      }}
      >
        <h1 style={{ color: 'white', lineHeight: '1.4' }}>Podręczniki szkolne</h1>
        <div style={{
          display: 'flex', marginLeft: '2rem', color: 'white',
        }}
        >
          <Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', marginRight: '0.5rem' }}>
              <CartLogo style={{ width: '2rem', height: '2rem', margin: '0.6rem' }} />
              <p style={{
                fontSize: '1rem',
                lineHeight: '1rem',
                width: '1rem',
                borderRadius: '50%',
                position: 'absolute',
                top: '0',
                right: '0',
                color: 'white',
                background: 'red',
              }}
              >
                0
              </p>
            </div>
            Koszyk
          </Link>
        </div>
      </div>
      {content}
    </div>
  );
}

export default Home;
