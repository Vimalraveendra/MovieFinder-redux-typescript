import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectMovies,
  selectError,
} from "../../Redux/FilmCard/FilmCard.selectors";
import { selectSearchField } from "../../Redux/SearchBox/SearchBox.selectors";
import { IMoviesList } from "../../Redux/FilmCard/FilmCard.types";
import { ISearchBox } from "../../Redux/SearchBox/SearchBox.types";

type propsList = IMoviesList & ISearchBox;

const MovieList = ({ movies, error, searchField }) => {
  return error || searchField.length === 0 ? (
    <MovieCard error={error} />
  ) : (
    <div className={styles.movielist}>
      {movies &&
        movies.map(({ imdbID, Title, Poster, Year }) => {
          return Poster !== "N/A" ? (
            <MovieCard key={imdbID} title={Title} poster={Poster} year={Year} />
          ) : null;
        })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: selectMovies,
  error: selectError,
  searchField: selectSearchField,
});
export default connect(mapStateToProps)(MovieList);
