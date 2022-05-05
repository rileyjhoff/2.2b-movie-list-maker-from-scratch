import React from 'react';

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
          <input />
        </label>
        <label>
          Year:
          <input type="number" />
        </label>
        <label>
          Director:
          <input />
        </label>
        <label>
          Poster Color:
          <select>
            <option />
            <option />
            <option />
            <option />
          </select>
        </label>
      </form>
    </div>
  );
}
