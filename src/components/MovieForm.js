import React from 'react';
import { Button } from 'react-bootstrap';

export default function MovieForm({
  movieFormTitle,
  movieFormYear,
  movieFormDirector,
  movieFormColor,
  setMovieFormTitle,
  setMovieFormYear,
  setMovieFormDirector,
  setMovieFormColor,
}) {
  return (
    <div className="movie-form">
      <h2>Enter Movie Info</h2>
      <form>
        <label>
          Title:
          <input
            required
            value={movieFormTitle}
            onChange={(e) => setMovieFormTitle(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            required
            type="number"
            value={movieFormYear}
            onChange={(e) => setMovieFormYear(e.target.value)}
          />
        </label>
        <label>
          Director:
          <input
            required
            value={movieFormDirector}
            onChange={(e) => setMovieFormDirector(e.target.value)}
          />
        </label>
        <label>
          Poster Color:
          <select
            required
            value={movieFormColor}
            onChange={(e) => setMovieFormColor(e.target.value)}
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
        </label>
        <Button variant="primary" size="sm">
          Submit
        </Button>
      </form>
    </div>
  );
}
