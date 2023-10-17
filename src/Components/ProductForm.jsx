import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function ProductForm({ show, onHide, onSubmit }) {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.value);
  };

  const handleSubmit = () => {
    const newProduct = { name: productName, image: productImage };
    onSubmit(newProduct);
    setProductName('');
    setProductImage('');
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastre um novo produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="productName">
            <Form.Label>Nome do Produto</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome do produto" value={productName} onChange={handleProductNameChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productImage">
            <Form.Label>URL da Imagem</Form.Label>
            <Form.Control type="text" placeholder="Cole a URL da imagem" value={productImage} onChange={handleProductImageChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Cadastrar Produto
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductForm;
