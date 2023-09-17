import React from 'react'; 
import{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMovieHandler() {
    fetch('https://swapi.dev/api/films/')
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        const transformeMovies = data.results.map(movieData =>{
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          };
        });
       setMovies(transformeMovies);
      });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
