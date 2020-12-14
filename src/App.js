import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { list } from "./data";
import Search from "./components/Search";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {
  const [movies, setMovies] = useState(list);

  const [searchValue, setSearchValue] = useState("");
  const [serachRate, setSerachRate] = useState(1);

  //handleValue
  const handleValue = (e) => setSearchValue(e.target.value);
  //handleRate
  const handleRate = (Rating) => setSerachRate(Rating);

  return (
    <div className="container">
      <div className="jumbotron alert-success">
        <div className="text-center center-block">
          <Search
            handleValue={handleValue}
            searchValue={searchValue}
            serachRate={serachRate}
            handleRate={handleRate}
          />
          <MoviesList
            movies={movies.filter(
              (el) =>
                el.name
                  .toUpperCase()
                  .includes(searchValue.toUpperCase().trim()) &&
                el.rate >= serachRate
            )}
          />
        </div>
        <AddMovie setMovies={setMovies} movies={movies} />
      </div>
    </div>
  );
}

export default App;
