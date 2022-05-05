import './App.css';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <MovieForm />
      <Movie />
      <MovieList />
    </div>
  );
}

export default App;
