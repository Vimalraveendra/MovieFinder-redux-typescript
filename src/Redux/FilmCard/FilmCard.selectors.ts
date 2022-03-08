import { createSelector } from "reselect";
import { AppState } from "../store";

const selectMoviesList = (state: AppState) => state.moviesList;

export const selectMovies = createSelector(
  [selectMoviesList],
  (moviesList) => moviesList.movies
);

export const selectError = createSelector(
  [selectMoviesList],
  (moviesList) => moviesList.error
);