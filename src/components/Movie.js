import React from 'react';
import { Card } from 'react-bootstrap';

export default function Movie({ year, title, director, color }) {
  return (
    <Card className="movie-card" style={{ backgroundColor: color }}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{year}</Card.Text>
      <Card.Text>{director}</Card.Text>
    </Card>
  );
}
