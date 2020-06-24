import { takeLatest, call, put } from "redux-saga/effects";
import FilmCardActionTypes from "./FilmCard.types";
import { fetchFilmDataSuccess, fetchFilmDataFailure } from "./FilmCard.actions";
import { fetchFilmData } from "../../API/API";

export function* fetchFilmDataAsync({ payload }) {
  // yield keyword is similar to await keyword it intercept execution
  try {
    if (payload.length > 0) {
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
  yield takeLatest(
    FilmCardActionTypes.REQUEST_FILM_DATA_START,
    fetchFilmDataAsync
  );
}
