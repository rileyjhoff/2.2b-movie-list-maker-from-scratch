import React from 'react';
import { Button } from 'react-bootstrap';

// export default function MovieForm({
//   movieFormTitle,
//   movieFormYear,
//   movieFormDirector,
//   movieFormColor,
//   setMovieFormTitle,
//   setMovieFormYear,
//   setMovieFormDirector,
//   setMovieFormColor,
//   handleSubmitMovie,
// })

export default class MovieForm extends React.Component {
  render() {
    return (
      <div className="movie-form">
        <form onSubmit={this.props.handleSubmitMovie}>
          <label>
            Title:
            <input
              required
              value={this.props.movieFormTitle}
              onChange={(e) => this.props.setMovieFormTitle(e.target.value)}
            />
          </label>
          <label>
            Year:
            <input
              required
              type="number"
              value={this.props.movieFormYear}
              onChange={(e) => this.props.setMovieFormYear(e.target.value)}
            />
          </label>
          <label>
            Director:
            <input
              required
              value={this.props.movieFormDirector}
              onChange={(e) => this.props.setMovieFormDirector(e.target.value)}
            />
          </label>
          <label>
            Poster Color:
            <select
              value={this.props.movieFormColor}
              onChange={(e) => this.props.setMovieFormColor(e.target.value)}
            >
              <option value="#3AAED8">Blue</option>
              <option value="#52AA5E">Green</option>
              <option value="#FFC914">Yellow</option>
              <option value="#EC7D10">Orange</option>
              <option value="#DB3A34">Red</option>
              <option value="#FF3CC7">Pink</option>
              <option value="#AA7DCE">Lavender</option>
            </select>
          </label>
          <Button variant="primary" size="sm" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
