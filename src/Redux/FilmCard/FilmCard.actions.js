import FilmCardActionTypes from "./FilmCard.types";
import { fetchFilmData } from "../../API/API";

export const clearMovies = () => ({
  type: FilmCardActionTypes.CLEAR_FILM_DATA,
});

export const fetchFilmDataStart = () => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_START,
});

export const fetchFilmDataSuccess = (data) => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_SUCCESS,
  payload: data,
});

export const fetchFilmDataFailure = (error) => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_FAILURE,
  payload: error,
});

export const fetchedFilmData = async (searchField) => (dispatch) => {
  console.log("serchfield", searchField);
  dispatch(fetchFilmDataStart());
  try {
    const response = fetchFilmData(searchField);
    dispatch(fetchFilmDataSuccess(response));
  } catch (error) {
    dispatch(fetchFilmDataFailure(error));
  }
};
