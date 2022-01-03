import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { Link } from 'react-router-dom';
import { ReactComponent as CartLogo } from './cart.svg';
import Basket from './Basket';
import Form from './Form';

function Home() {
  const url = 'http://localhost:3001/api/book';
  const [book, setBook] = useState(null);

  let content = null;

  // const handleAddButton = (e) => {
  //   e.preventDefault();
  // };

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
              <Button variant="secondary">Dodaj do koszyka</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div className="Home">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'white', marginBottom: '3rem' }}>Podręczniki szkolne</h1>
        <div style={{
          display: 'flex', marginLeft: '2rem', color: 'white',
        }}
        >
          <p style={{ fontSize: '2rem' }}>
            0
          </p>
          <Link to="/basket"><CartLogo style={{ width: '2rem', height: '2rem', margin: '0.5rem' }} /></Link>
        </div>
      </div>
      {content}
      <Basket book={book} />
      <Form />
    </div>
  );
}

export default Home;
