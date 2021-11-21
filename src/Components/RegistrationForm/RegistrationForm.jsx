import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const RegistrationForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Título</Form.Label>
          <Form.Control type="email" placeholder="Titulo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" placeholder="Escreva sua nota..." rows={3} />
        </Form.Group>
        <Button variant="outline-primary">Criar Nota</Button>{' '}
      </Form>
    </>
  );
}

export default RegistrationForm;