import FilmCardActionTypes from "./FilmCard.types";
// import { fetchFilmData } from "../../API/API";

export const clearMovies = () => ({
  type: FilmCardActionTypes.CLEAR_FILM_DATA,
});

export const fetchFilmDataStart = (searchField) => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_START,
  payload: searchField,
});

export const fetchFilmDataSuccess = (data) => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_SUCCESS,
  payload: data,
});

export const fetchFilmDataFailure = (error) => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_FAILURE,
  payload: error,
});

// export const fetchedFilmData = (searchField) => async (dispatch) => {
//   dispatch(fetchFilmDataStart());

//   try {
//     if (searchField.length > 0) {
//       const response = await fetchFilmData(searchField);
//       dispatch(fetchFilmDataSuccess(response));
//     } else {
//       throw Error("Sorry!!!, Please enter a film name");
//     }
//   } catch (error) {
//     dispatch(fetchFilmDataFailure(error.message));
//   }
// };
