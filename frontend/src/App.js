import React, { useState, useEffect } from 'react';
import './App.css';

const MovieList = ({ movies }) => (
  <div className="MovieList">
    {movies.map((movie, index) => (
      <div className="MovieItem" key={index}>
        <div className="MovieItem-title">{movie.title}</div>
        <div className="MovieItem-description">{movie.description}</div>
      </div>
    ))}
  </div>
);

const App = () => {
  const [header, setHeader] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/home/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeader(data.message);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchHeader();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/movies/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">{header}</header>
      <button onClick={fetchMovies} disabled={loading}>
        {loading ? 'Loading...' : 'Load Movies'}
      </button>
      {error && <div>Error: {error}</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

