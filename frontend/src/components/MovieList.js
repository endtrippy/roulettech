// MovieList.js
import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

