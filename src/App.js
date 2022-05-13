/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      prevAllMovies: [],
      filter: '',
      prevFilter: '',
      filteredMovies: [],
      movieFormTitle: '',
      movieFormYear: '',
      movieFormDirector: '',
      movieFormColor: '#3AAED8',
    };
  }

  // const [allMovies, setAllMovies] = useState([]);
  // const [filter, setFilter] = useState('');
  // const [filteredMovies, setFilteredMovies] = useState([]);
  // const [movieFormTitle, setMovieFormTitle] = useState('');
  // const [movieFormYear, setMovieFormYear] = useState('');
  // const [movieFormDirector, setMovieFormDirector] = useState('');
  // const [movieFormColor, setMovieFormColor] = useState('#3AAED8');

  handleSubmitMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      title: this.state.movieFormTitle,
      year: this.state.movieFormYear,
      director: this.state.movieFormDirector,
      color: this.state.movieFormColor,
    };
    this.setState({ prevAllMovies: [...this.state.allMovies] });
    this.setState({ allMovies: [...this.state.allMovies, newMovie] });
    this.setState({ movieFormTitle: '' });
    this.setState({ movieFormYear: '' });
    this.setState({ movieFormDirector: '' });
    this.setState({ movieFormColor: '#3AAED8' });
  };

  // function handleSubmitMovie(e) {
  //   e.preventDefault();
  //   const newMovie = {
  //     title: movieFormTitle,
  //     year: movieFormYear,
  //     director: movieFormDirector,
  //     color: movieFormColor,
  //   };
  //   setAllMovies([...allMovies, newMovie]);
  //   setMovieFormTitle('');
  //   setMovieFormYear('');
  //   setMovieFormDirector('');
  //   setMovieFormColor('#3AAED8');
  // }

  handleDeleteMovie = (title) => {
    this.setState({ prevAllMovies: [...this.state.allMovies] });
    const index = this.state.allMovies.findIndex((movie) => movie.title === title);
    this.state.allMovies.splice(index, 1);
    this.setState({ allMovies: [...this.state.allMovies] });
  };

  //   function handleDeleteMovie(title) {
  //   const index = allMovies.findIndex((movie) => movie.title === title);
  //   allMovies.splice(index, 1);
  //   setAllMovies([...allMovies]);
  // }

  handleFilterMovies() {
    if (this.state.filter) {
      const includedMovies = this.state.allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(this.state.filter.toLowerCase())
      );
      this.setState({ filteredMovies: [...includedMovies] });
    } else {
      this.setState({ filteredMovies: [...this.state.allMovies] });
    }
  }

  // function handleFilterMovies() {
  //   if (filter) {
  //     const includedMovies = allMovies.filter((movie) =>
  //       movie.title.toLowerCase().includes(filter.toLowerCase())
  //     );
  //     setFilteredMovies([...includedMovies]);
  //   } else {
  //     setFilteredMovies([...allMovies]);
  //   }
  // }

  componentDidUpdate() {
    if (this.state.prevFilter !== this.state.filter) {
      this.handleFilterMovies();
      this.setState({ prevFilter: this.state.filter });
    }
    if (this.state.prevAllMovies !== this.state.allMovies) {
      this.handleFilterMovies();
      this.setState({ prevAllMovies: this.state.allMovies });
    }
  }

  // useEffect(() => {
  //   handleFilterMovies();
  // }, [filter, allMovies]);

  render() {
    return (
      <div className="App">
        <header>
          <h2>Movie Card Maker</h2>
        </header>
        <div className="top-container">
          <MovieForm
            movieFormTitle={this.state.movieFormTitle}
            movieFormYear={this.state.movieFormYear}
            movieFormDirector={this.state.movieFormDirector}
            movieFormColor={this.state.movieFormColor}
            setMovieFormTitle={(movieFormTitle) => this.setState({ movieFormTitle })}
            setMovieFormYear={(movieFormYear) => this.setState({ movieFormYear })}
            setMovieFormDirector={(movieFormDirector) => this.setState({ movieFormDirector })}
            setMovieFormColor={(movieFormColor) => this.setState({ movieFormColor })}
            handleSubmitMovie={this.handleSubmitMovie}
          />
          <div className="current-movie">
            <Movie
              title={this.state.movieFormTitle}
              year={this.state.movieFormYear}
              director={this.state.movieFormDirector}
              color={this.state.movieFormColor}
            />
          </div>
        </div>
        {this.state.allMovies.length > 0 && (
          <label className="filter">
            Filter Movies by Title:
            <input
              value={this.state.filter}
              onChange={(e) =>
                this.setState({ prevFilter: this.state.filter, filter: e.target.value })
              }
            />
          </label>
        )}
        <MovieList
          movies={this.state.filter ? this.state.filteredMovies : this.state.allMovies}
          handleDeleteMovie={this.handleDeleteMovie}
        />
      </div>
    );
  }
}

// return (
//   <div className="App">
//     <header>
//       <h2>Movie Card Maker</h2>
//     </header>
//     <div className="top-container">
//       <MovieForm
//         movieFormTitle={movieFormTitle}
//         movieFormYear={movieFormYear}
//         movieFormDirector={movieFormDirector}
//         movieFormColor={movieFormColor}
//         setMovieFormTitle={setMovieFormTitle}
//         setMovieFormYear={setMovieFormYear}
//         setMovieFormDirector={setMovieFormDirector}
//         setMovieFormColor={setMovieFormColor}
//         handleSubmitMovie={handleSubmitMovie}
//       />
//       <div className="current-movie">
//         <Movie
//           title={movieFormTitle}
//           year={movieFormYear}
//           director={movieFormDirector}
//           color={movieFormColor}
//         />
//       </div>
//     </div>
//     {allMovies.length > 0 && (
//       <label className="filter">
//         Filter Movies by Title:
//         <input value={filter} onChange={(e) => setFilter(e.target.value)} />
//       </label>
//     )}
//     <MovieList
//       movies={filter ? filteredMovies : allMovies}
//       handleDeleteMovie={handleDeleteMovie}
//     />
//   </div>
// );

// export default App;
