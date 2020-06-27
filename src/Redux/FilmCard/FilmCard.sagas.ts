import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchFilmDataStartAction,
  REQUEST_FILM_DATA_START,
} from "./FilmCard.types";
import { fetchFilmDataSuccess, fetchFilmDataFailure } from "./FilmCard.actions";
import { fetchFilmData } from "../../API/API";

//now here we are going to specify the type of the parameter & the return action type
export function* fetchFilmDataAsync({ payload }: fetchFilmDataStartAction) {
  // yield keyword is similar to await keyword it intercepts execution.
  try {
    if (payload.length > 0) {
      // call is a effect runs a function, it takes two parameters, first is the
      // function and second parameter is the argument that to pass inside of the function.
      const response = yield call(fetchFilmData, payload);
      // put affect is used to dispatch actions to reducer
      yield put(fetchFilmDataSuccess(response));
    } else {
      throw Error("Sorry!!!, Please enter a film name");
    }
  } catch (error) {
    yield put(fetchFilmDataFailure(error.message));
  }
}
export function* watchFetchFilmData() {
  yield takeLatest(REQUEST_FILM_DATA_START, fetchFilmDataAsync);
}
