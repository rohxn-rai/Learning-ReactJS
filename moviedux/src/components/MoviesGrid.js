import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('movies.json')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <divc className="movies-grid">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id}></MovieCard>
      ))}
    </divc>
  );
}
