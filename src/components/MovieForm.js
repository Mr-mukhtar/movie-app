// MovieForm.js

import React, { useState } from 'react';
import classes from './MovieForm.module.css';

const MovieForm = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(newMovie);
    console.log('New Movie:', newMovie);
    setNewMovie({
        title: '',
        openingText: '',
        releaseDate: '',
      });
  };

  return (
    <form className={classes['form-container']} onSubmit={submitHandler}>
      <div>
        <label className={classes.label}>Title</label>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
          className={classes.input}
        />
      </div>
      <div>
        <label className={classes.label}>Opening Text</label>
        <textarea
          name="openingText"
          value={newMovie.openingText}
          onChange={handleInputChange}
          className={classes.input}
        />
      </div>
      <div>
        <label className={classes.label}>Release Date</label>
        <input
          type="date"
          name="releaseDate"
          value={newMovie.releaseDate}
          onChange={handleInputChange}
          className={classes.input}
        />
      </div>
      <button type="submit" className={classes.button}>
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
