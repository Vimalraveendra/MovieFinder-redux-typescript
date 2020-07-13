import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

// interface IMoviesListProps {}
// //here we are doing aggregation of all the props types.
// type propsList = IMoviesListProps & LinkStateProps;

const MovieList = ({ movies, error, searchField }) => {
  return error || searchField.length === 0 ? (
    <MovieCard error={error} />
  ) : (
    <div className={styles.movielist}>
      {movies &&
        movies.map(({ imdbID, Title, Poster, Year }) => {
          return Poster !== "N/A" ? (
            <MovieCard key={imdbID} Title={Title} Poster={Poster} Year={Year} />
          ) : null;
        })}
    </div>
  );
};

export default MovieList;
