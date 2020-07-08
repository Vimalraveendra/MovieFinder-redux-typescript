import {
  CLEAR_FILM_DATA,
  REQUEST_FILM_DATA_START,
  REQUEST_FILM_DATA_SUCCESS,
  REQUEST_FILM_DATA_FAILURE,
} from "./FilmCard.types";

import * as actions from "./FilmCard.actions.ts";

describe("Search Change", () => {
  it("should create an action to search movies", () => {
    const payload = [
      {
        imdbID: "123",
        Title: "Hello",
        Poster: "how are you",
        Year: "2020",
      },
    ];
    const expectedResult = {
      type: CLEAR_FILM_DATA,
    };
    expect(actions.clearMovies(payload)).toEqual(expectedResult);
  });
});

describe("fetch film data", () => {
  it("handle request movies start ", () => {
    const searchField = "helloo";
    const expectedOutput = {
      type: REQUEST_FILM_DATA_START,
      payload: searchField,
    };
    expect(actions.fetchFilmDataStart(searchField)).toEqual(expectedOutput);
  });

  it("should handle the fetch film data success ", () => {
    const data = [
      {
        imdbID: "123",
        Title: "Hello",
        Poster: "how are you",
        Year: "2020",
      },
    ];

    const expectActions = {
      type: REQUEST_FILM_DATA_SUCCESS,
      payload: data,
    };
    expect(actions.fetchFilmDataSuccess(data)).toEqual(expectActions);
  });

  it("should handle the fetch FIlm Data Failure ", () => {
    const error = "something went wrong!!!";
    const expectedAction = {
      type: REQUEST_FILM_DATA_FAILURE,
      payload: error,
    };
    expect(actions.fetchFilmDataFailure(error)).toEqual(expectedAction);
  });
});
