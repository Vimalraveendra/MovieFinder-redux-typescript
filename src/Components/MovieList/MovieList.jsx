import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({ movies, error }) => {
  console.log("movies", movies);
  console.log("error", error);
  return (
    <div className={styles.movielist}>
      {movies.map(({ imdbID, Title, Poster, Year }) => {
        return (
          <MovieCard key={imdbID} title={Title} poster={Poster} year={Year} />
        );
      })}
    </div>
  );
};

export default MovieList;
