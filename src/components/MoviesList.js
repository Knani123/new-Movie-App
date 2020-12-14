import React from "react";
import CardMovie from "./CardMovie/CardMovie";
const MoviesList = ({ movies }) => {
  return (
    <div className="row justify-content-center">
      {movies.map((film, i) => (
        <CardMovie film={film} key={i} />
      ))}
    </div>
  );
};

export default MoviesList;
