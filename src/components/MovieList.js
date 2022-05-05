import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies }) {
  return (
    <div className="movies-list">
      {movies.map((movie, i) => (
        <Movie key={movie + i} movie={movie} />
      ))}
    </div>
  );
}
