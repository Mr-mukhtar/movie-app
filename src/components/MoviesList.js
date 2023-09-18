import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  if (!props.movies) {
    return null;
  }

  const handleDeleteMovie = (movieId) => {
    // Pass the movie ID to the delete handler function from props
    props.onDeleteMovie(movieId);
  };

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
          <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
