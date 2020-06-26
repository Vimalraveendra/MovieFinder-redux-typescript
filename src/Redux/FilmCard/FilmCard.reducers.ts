import {
  FilmCardActionTypes,
  REQUEST_FILM_DATA_START,
  REQUEST_FILM_DATA_SUCCESS,
  REQUEST_FILM_DATA_FAILURE,
  CLEAR_FILM_DATA,
  IMoviesList,
} from "./FilmCard.types";

//the first thing we need to do specify the type of default state or initial state
// for that you have to make sure to import  the types from filmCardActionTypes
const initialState: IMoviesList = {
  movies: [],
  isPending: false,
  error: "",
};
// now here we are going to specify the types of the parameters &
// types of the return type
export const FilmCardReducer = (
  state = initialState,
  action: FilmCardActionTypes
): IMoviesList => {
  switch (action.type) {
    case REQUEST_FILM_DATA_START:
      return {
        ...state,
        isPending: true,
      };

    case REQUEST_FILM_DATA_SUCCESS:
      return {
        ...state,
        isPending: false,
        movies: action.payload,
      };

    case REQUEST_FILM_DATA_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };

    case CLEAR_FILM_DATA:
      return {
        ...state,
        movies: [],
        error: "",
      };
    default:
      return state;
  }
};
