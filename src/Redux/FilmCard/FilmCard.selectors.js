import { createSelector } from "reselect";

const selectMoviesList = (state) => state.moviesList;

export const selectMovies = createSelector(
  [selectMoviesList],
  (moviesList) => moviesList.movies
);

export const selectError = createSelector(
  [selectMoviesList],
  (moviesList) => moviesList.error
);
