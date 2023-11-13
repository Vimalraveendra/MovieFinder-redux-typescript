import {
    FilmCardActionTypes,
    CLEAR_FILM_DATA,
    REQUEST_FILM_DATA_START,
    REQUEST_FILM_DATA_SUCCESS,
    REQUEST_FILM_DATA_FAILURE,
    IMovies,
  } from "./FilmCard.types";
  // import { fetchFilmData } from "../../API/API";
  
  // here we are going specify one thing i.e return action type because
  //the clearMovies is not taking any paramter
  export const clearMovies = (): FilmCardActionTypes => ({
    type: CLEAR_FILM_DATA,
  });
  
  // here we are going to specify the type of the parameter & the return action type
  // here the type of searchField is string & return action is typeof REQUEST_FILM_DATA_START
  export const fetchFilmDataStart = (
    searchField: string
  ): FilmCardActionTypes => ({
    type: REQUEST_FILM_DATA_START,
    payload: searchField,
  });
  
  //now here we are going to specify the type of the parameter & the return action type
  // here the type of data is typeof ArrayObject & return action is typeof  REQUEST_FILM_DATA_SUCCESS,
  export const fetchFilmDataSuccess = (
    data: Array<IMovies>
  ): FilmCardActionTypes => ({
    type: REQUEST_FILM_DATA_SUCCESS,
    payload: data,
  });
  // here we are going to specify the type of the parameter & the return action type
  // here the type of error is string & return action is typeof REQUEST_FILM_DATA_FAILURE
  export const fetchFilmDataFailure = (error: string) => ({
    type: REQUEST_FILM_DATA_FAILURE,
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