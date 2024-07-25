import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Foodlist1({ food }) {
  return (
    <Card style={{ width: '21rem', height:'280px' }} className="mb-5 mt-4">
      <Card.Img variant="top" src={food.image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{food.title}</Card.Title>
        
        
      </Card.Body>
    </Card>
  );
}

export default Foodlist1;
