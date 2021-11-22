import React from 'react'
import Card from 'react-bootstrap/Card'
import CapaCard from '../../assets/img/capa-card.jpg'

export const NoteCard = ({titulo}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CapaCard} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          Escreva sua nota..
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NoteCard;