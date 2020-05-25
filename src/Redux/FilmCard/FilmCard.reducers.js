import FilmCardActionTypes from "./FilmCard.types";

const initialState = {
  movies: [],
  isPending: false,
  error: "",
};

export const FilmCardReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FilmCardActionTypes.REQUEST_FILM_DATA_START:
      return {
        ...state,
        isPending: true,
      };

    case FilmCardActionTypes.REQUEST_FILM_DATA_SUCCESS:
      return {
        ...state,
        isPending: false,
        movies: action.payload,
      };

    case FilmCardActionTypes.REQUEST_FILM_DATA_FAILURE:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };

    case FilmCardActionTypes.CLEAR_FILM_DATA:
      return {
        ...state,
        movies: [],
      };
    default:
      return state;
  }
};
