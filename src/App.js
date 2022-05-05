import './App.css';
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
      <MovieForm />
      <Movie />
      <MovieList />
    </div>
  );
}

export default App;
