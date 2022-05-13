import React from 'react';
import { Card } from 'react-bootstrap';

export default class Movie extends React.Component {
  render() {
    return (
      <div>
        {(this.props.title || this.props.director || this.props.year) && (
          <Card
            className="movie-card"
            style={{ backgroundColor: this.props.color }}
            onClick={() => this.props.handleDeleteMovie(this.props.title)}
          >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.year}</Card.Text>
            <Card.Text>{this.props.director}</Card.Text>
          </Card>
        )}
      </div>
    );
  }
}

// export default function Movie({ year, title, director, color, handleDeleteMovie }) {
//   return (
//     <div>
//       {(title || director || year) && (
//         <Card
//           className="movie-card"
//           style={{ backgroundColor: color }}
//           onClick={() => handleDeleteMovie(title)}
//         >
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{year}</Card.Text>
//           <Card.Text>{director}</Card.Text>
//         </Card>
//       )}
//     </div>
//   );
// }
