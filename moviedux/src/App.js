import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <MovieGrid></MovieGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
