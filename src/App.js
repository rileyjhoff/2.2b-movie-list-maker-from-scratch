import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import { useState } from 'react';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  return (
    <div className="App">
      <div className="top-container">
        <MovieForm
          movieFormTitle={movieFormTitle}
          movieFormYear={movieFormYear}
          movieFormDirector={movieFormDirector}
          movieFormColor={movieFormColor}
          setMovieFormTitle={setMovieFormTitle}
          setMovieFormYear={setMovieFormYear}
          setMovieFormDirector={setMovieFormDirector}
          setMovieFormColor={setMovieFormColor}
        />
        <Movie
          year={movieFormYear}
          title={movieFormTitle}
          director={movieFormDirector}
          color={movieFormColor}
        />
      </div>
      <label className="filter">
        Filter Movies by Title:
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </label>
      <MovieList movies={filter ? filteredMovies : allMovies} />
    </div>
  );
}

export default App;
