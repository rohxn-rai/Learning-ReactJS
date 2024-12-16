import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  // set up movies and it's useState
  const [movies, setMovies] = useState([]);

  // set up watchlist and it's useState
  const [watchlist, setWatchlist] = useState([]);

  // extract the list of movies
  useEffect(() => {
    fetch('movies.json')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const toggleWatchlist = movieID => {
    setWatchlist(prev =>
      prev.includes(movieID) ? prev.filter(id => id !== movieID) : [...prev, movieID]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Wishlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
