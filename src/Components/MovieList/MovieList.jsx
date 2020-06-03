import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { connect } from "react-redux";

const MovieList = ({ movies, error, searchField }) => {
  console.log("searchdie", searchField);
  console.log("movies", movies);
  return (error && movies.length) === 0 ? (
    <MovieCard error={error} />
  ) : (
    <div className={styles.movielist}>
      {movies &&
        movies.map(({ imdbID, Title, Poster, Year }) => {
          return (
            <MovieCard key={imdbID} title={Title} poster={Poster} year={Year} />
          );
        })}
    </div>
  );
};

const mapStateToProps = ({
  moviesList: { movies, error },
  searchText: { searchField },
}) => ({
  movies,
  error,
  searchField,
});
export default connect(mapStateToProps)(MovieList);
