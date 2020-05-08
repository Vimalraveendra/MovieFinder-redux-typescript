import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  console.log("movies", movies);
  return (
    <div>
      {movies.map(({ imdbID, Title, Poster, year }) => {
        return (
          <MovieCard key={imdbID} title={Title} poster={Poster} year={year} />
        );
      })}
    </div>
  );
};

export default MovieList;
