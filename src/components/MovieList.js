import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie, i) => (
          <Movie
            key={movie + i}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            color={movie.color}
            handleDeleteMovie={this.props.handleDeleteMovie}
          />
        ))}
      </div>
    );
  }
}

// export default function MovieList({ movies, handleDeleteMovie }) {
//   return (
//     <div className="movie-list">
//       {movies.map((movie, i) => (
//         <Movie
//           key={movie + i}
//           title={movie.title}
//           year={movie.year}
//           director={movie.director}
//           color={movie.color}
//           handleDeleteMovie={handleDeleteMovie}
//         />
//       ))}
//     </div>
//   );
// }
