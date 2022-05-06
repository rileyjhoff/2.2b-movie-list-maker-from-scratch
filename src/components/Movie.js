import React from 'react';
import { Card } from 'react-bootstrap';

export default function Movie({ year, title, director, color, handleDeleteMovie }) {
  return (
    <div>
      {(title || director || year) && (
        <Card className="movie-card" style={{ backgroundColor: color }} onClick={handleDeleteMovie}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{year}</Card.Text>
          <Card.Text>{director}</Card.Text>
        </Card>
      )}
    </div>
  );
}
