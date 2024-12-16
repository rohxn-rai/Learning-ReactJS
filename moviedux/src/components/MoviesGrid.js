import React, { useState } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MovieGrid({ movies, watchlist, toggleWatchlist }) {
  // set up different filter and it's useState
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('All Genres');
  const [rating, setRating] = useState('All');

  // tigger for search filter
  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  // tigger for genre filter
  const handleGenreChange = e => {
    setGenre(e.target.value);
  };

  // tigger for rating filter
  const handleRatingChange = e => {
    setRating(e.target.value);
  };

  // logic for genre filter
  const matchesGenre = (movie, genre) => {
    return genre === 'All Genres' || movie.genre.toLowerCase() === genre.toLowerCase();
  };

  // logic for search filter
  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // logic for rating filter
  const macthesRating = (movie, rating) => {
    switch (rating) {
      case 'All':
        return true;
      case 'Good':
        return movie.rating >= 8;
      case 'Okay':
        return movie.rating < 8 && movie.rating >= 5;
      case 'Bad':
        return movie.rating < 5;
      default:
        return false;
    }
  };

  // filtering calling
  const filteredMovies = movies.filter(
    movie =>
      matchesGenre(movie, genre) &&
      matchesSearchTerm(movie, searchTerm) &&
      macthesRating(movie, rating)
  );

  // Movie Grid front-end
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies...."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genres</label>
          <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
            <option>All</option>
            <option>Good</option>
            <option>Okay</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
