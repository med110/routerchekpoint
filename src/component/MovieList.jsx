import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, del }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {movies.map((el) => (
        <MovieCard el={el} key={el.id} del={del} />
      ))}
    </div>
  );
};

export default MovieList;
