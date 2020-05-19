import FilmCardActionTypes from "./FilmCard.types";
import {fetchFilmData} from "../../API/API" 

export const fetchFilmDataStart = () => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_START,
});

export const fetchFilmDataSuccess = (data) => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_SUCCESS,
  payload: data,
});

export const fetchFilmDataFailed = (error) => ({
  type: FilmCardActionTypes.REQUEST_FILM_DATA_FAILED,
  payload: error,
});

export const fetchedFilmData =async (searchField)=>dispatch=>{
    dispatch(fetchFilmDataStart())
    try{
        const response= await fetchFilmData(searchField)
        dispatch(fetchFilmDataSuccess(response))
    }catch(error){
        dispatch(fetchFilmDataFailed(error))
    }

    
}
