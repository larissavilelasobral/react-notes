import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './RegistrationForm.css'

export const RegistrationForm = () => {
  const [title, setTitle] = useState([]);
  const [texto, setTexto] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleTexto = (e) => {
    setTexto(e.target.value);
  }
   
  return (
    <>
      <Form className="container-form"
        
      >
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          onChange={(e) => handleTitle(e)}>
          <Form.Label>
            Título
          </Form.Label>
          <Form.Control
            type="title"
            placeholder="Titulo"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          onChange={(e) => handleTexto(e)}
          >
          <Form.Label>
            Texto do Card
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Escreva sua nota..."
            rows={3}
          />
        </Form.Group>
        <Button
          variant="outline-primary"
          
        >
          Criar Nota
        </Button>
      </Form>
    </>
  );
}

export default RegistrationForm;