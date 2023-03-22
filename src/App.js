import React , {useState} from 'react';
import { moviesData } from './movieData';
import MoviesList from './components/MoviesList';
import './App.css';
import MovieNavbar from './components/MovieNavbar';
import AddMovie from './components/AddMovie';

function App() {
  const [movies , setMovies] = useState(moviesData)
  const [searchName , setSearchName] = useState("");
  const [searchRating , setSearchRating] = useState(0)
  console.log("searchName : " , searchName)
console.log(movies)
  const addMovie = (movie)=>{
    setMovies([...movies , movie])
  }

  return (
    <div>
      <MovieNavbar setSearchName={setSearchName} setSearchRating={setSearchRating} />
      <AddMovie addMovie={addMovie} />
      <MoviesList movies={movies} searchName={searchName} searchRating={searchRating} />
    </div> 
  );
}

export default App;
