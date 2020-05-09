import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

const MovieList = ({ movies, error }) => {
  return (
    <div className={styles.movielist}>
      {movies.length > 0 ? (
        movies.map(({ imdbID, Title, Poster, Year }) => {
          return (
            <MovieCard key={imdbID} title={Title} poster={Poster} year={Year} />
          );
        })
      ) : (
        <MovieCard error={error} />
      )}
    </div>
  );
};

export default MovieList;
