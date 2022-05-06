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
  handleSubmitMovie,
}) {
  return (
    <div className="movie-form">
      <h2>Enter Movie Info</h2>
      <form onSubmit={handleSubmitMovie}>
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
          <select value={movieFormColor} onChange={(e) => setMovieFormColor(e.target.value)}>
            <option value="#08415C95">Blue</option>
            <option value="#CC293695">Red</option>
            <option value="#6B818C95">Gray</option>
            <option value="#F1BF9895">Peach</option>
            <option value="#EEE5E995">Lavender</option>
          </select>
        </label>
        <Button variant="primary" size="sm" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
