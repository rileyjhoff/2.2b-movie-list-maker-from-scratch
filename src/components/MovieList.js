import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, handleDeleteMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie, i) => (
        <Movie
          key={movie + i}
          title={movie.title}
          year={movie.year}
          director={movie.director}
          color={movie.color}
          handleDeleteMovie={handleDeleteMovie}
        />
      ))}
    </div>
  );
}
