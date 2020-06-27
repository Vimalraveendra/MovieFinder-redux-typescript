import { all, fork } from "redux-saga/effects";
import { watchFetchFilmData } from "./FilmCard/FilmCard.sagas";

export function* rootSaga() {
  // fork performs a non-blocking operation on the function passed.
  // Call affect runs a function. If it returns a promise, pauses the saga
  // until the promise is resolved.
  yield all([fork(watchFetchFilmData)]);
}
