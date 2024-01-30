import { useState } from "react";
import "./App.css";
import { infoMovies } from "./MoviesData";
import HeaderNav from "./component/HeaderNav";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";

function App() {
  //--------------states------------
  const [movies, setMovies] = useState(infoMovies);

  //--------------functions---------
  const handleDelete = (MovieId) => {
    setMovies(movies.filter((el) => (el.id !== MovieId)));
  };

  return (
    <div className="App">
      <HeaderNav />
      <MovieList movies={movies}  del={handleDelete}/>
      <AddMovie/>
    </div>
  );
}

export default App;
