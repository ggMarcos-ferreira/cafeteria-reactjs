import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Container, Row, Col, Nav, Navbar, Carousel } from 'react-bootstrap';
import ProductForm from './ProductForm';

function App() {
  const imageUrls = [
    'https://perfectdailygrind.com/pt/wp-content/uploads/sites/5/2020/03/Paul-Mordheweyk-1024x850.jpg',
    'https://www.guiadasemana.com.br/contentFiles/image/opt_w1280h960/2019/10/FEA/48956_shutterstock-281119871.jpg',
    'https://blog.cybercook.com.br/wp-content/uploads/2022/07/capuccino-caseiro-suavizando-e-saborizando-o-seu-cafe.jpg',
  ];

  const [products, setProducts] = useState([
    { image: 'https://paodanona.com.br/wp-content/uploads/2020/06/MG_0608-scaled.jpg', name: 'Café Espresso' },
    { image: 'https://img.freepik.com/fotos-premium/xicara-de-capuccino-de-cafe-quente-com-latte-art-na-mesa-de-madeira-no-cafe_778722-16.jpg', name: 'Café Latte' },
    { image: 'https://blog.meucopo.com/wp-content/uploads/2019/04/receitas_cafe.jpg', name: 'Café Cappuccino' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, products]);

  const [showProductForm, setShowProductForm] = useState(false);

  const handleProductFormSubmit = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowProductForm(false);
  };

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cafeteria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#cardapio">Cardápio</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Carousel>
          {imageUrls.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Button variant="secondary" onClick={() => setShowProductForm(true)}>
        Cadastre um Produto
      </Button>
      <Row className="product-container">
        {products.map((product, index) => (
          <Col sm={6} md={4} lg={3} key={index}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <button>Comprar</button>
            </div>
          </Col>
        ))}
      </Row>
      <ProductForm show={showProductForm} onHide={() => setShowProductForm(false)} onSubmit={handleProductFormSubmit} />
    </div>
  );
}

export default App;
