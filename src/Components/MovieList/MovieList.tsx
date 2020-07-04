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
import { IMovies } from "../../Redux/FilmCard/FilmCard.types";

import { AppState } from "../../Redux/store";

interface IMoviesListProps {}
//here we are doing aggregation of all the props  types.
type propsList = IMoviesListProps & LinkStateProps;

const MovieList = ({ movies, error, searchField }: propsList) => {
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

// here we need to specify the return type of  mapStateToProps.

interface LinkStateProps {
  movies: Array<IMovies>;
  error?: string | undefined;
  searchField: string;
}

// here we are going to specify the  type for parameter state & return
// type of mapStateToProps.
// createStructuredSelector comes with two variant- one takes App
//  total state(AppState),Apps ownProps and the return type of mapStateToProps(LinkStateProps)
// second one comes with App state and the return type of  mapStateToProps
// here we using the second type
const mapStateToProps = createStructuredSelector<AppState, LinkStateProps>({
  movies: selectMovies,
  error: selectError,
  searchField: selectSearchField,
});
export default connect(mapStateToProps)(MovieList);
