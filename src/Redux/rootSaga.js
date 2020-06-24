import { all, fork } from "redux-saga/effects";
import { watchFetchFilmData } from "./FilmCard/FilmCard.sagas";

export function* rootSaga() {
  // fork performs a non-blocking operation on the function passed
  yield all([fork(watchFetchFilmData)]);
}
