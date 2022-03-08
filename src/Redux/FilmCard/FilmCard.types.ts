    // Describing the shape of the movies  slice of state

export interface IMovies {
    [imdbID: string]: string;
    Title: string;
    Poster: string;
    Year: string;
  }
  
  export interface IMoviesList {
    movies: Array<IMovies>;
    isPending: boolean;
    error: string;
  }
  
  export const REQUEST_FILM_DATA_START = "REQUEST_FILM_DATA_START";
  export const REQUEST_FILM_DATA_SUCCESS = "REQUEST_FILM_DATA_SUCCESS";
  export const REQUEST_FILM_DATA_FAILURE = "REQUEST_FILM_DATA_FAILURE";
  export const CLEAR_FILM_DATA = "CLEAR_FILM_DATA";
  
  // so we are exporting each actions in typescript format
  
  export interface fetchFilmDataStartAction {
    type: typeof REQUEST_FILM_DATA_START;
    payload: string;
  }
  
  export interface fetchFilmDataSuccessAction {
    type: typeof REQUEST_FILM_DATA_SUCCESS;
    payload: Array<IMovies>;
  }
  
  export interface fetchFilmDataFailureAction {
    type: typeof REQUEST_FILM_DATA_FAILURE;
    payload: string;
  }
  
  export interface clearFilmDataAction {
    type: typeof CLEAR_FILM_DATA;
  }
  
  // here we making the aggregation all these typescript actions
  // for that I am using the union operator or OR  operator.
  
  export type FilmCardActionTypes =
    | fetchFilmDataStartAction
    | fetchFilmDataSuccessAction
    | fetchFilmDataFailureAction
    | clearFilmDataAction;