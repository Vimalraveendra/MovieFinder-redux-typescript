import {
  REQUEST_FILM_DATA_START,
  REQUEST_FILM_DATA_SUCCESS,
  REQUEST_FILM_DATA_FAILURE,
  CLEAR_FILM_DATA,
} from "./FilmCard.types";

import { FilmCardReducer } from "./FilmCard.reducers";

describe("Request Movies", () => {
  const mockState = {
    movies: [],
    isPending: false,
    error: "",
  };

  it("should render the initial state", () => {
    expect(FilmCardReducer(undefined, {})).toEqual(mockState);
  });

  it("should render the REQUEST_FILM_DATA_START Action", () => {
    const expectedResult = {
      movies: [],
      isPending: true,
      error: "",
    };
    expect(
      FilmCardReducer(mockState, {
        type: REQUEST_FILM_DATA_START,
      })
    ).toEqual(expectedResult);
  });

  it("should render the REQUEST_FILM_DATA_SUCCESS Action ", () => {
    const mockResult = {
      movies: [
        {
          imdbID: "123",
          Title: "Hello",
          Poster: "how are you",
          Year: "2020",
        },
      ],
      isPending: false,
      error: "",
    };

    expect(
      FilmCardReducer(mockState, {
        type: REQUEST_FILM_DATA_SUCCESS,
        payload: [
          {
            imdbID: "123",
            Title: "Hello",
            Poster: "how are you",
            Year: "2020",
          },
        ],
      })
    ).toEqual(mockResult);
  });

  it("should return the   REQUEST_FILM_DATA_FAILURE Action ", () => {
    const mockResult = {
      isPending: false,
      error: "something went wrong",
      movies: [],
    };
    expect(
      FilmCardReducer(mockState, {
        type: REQUEST_FILM_DATA_FAILURE,
        payload: "something went wrong",
      })
    ).toEqual(mockResult);
  });
});

describe("Clear Film Data", () => {
  const mockState = {
    movies: [],
    error: "",
  };
  it("should clear the movies display", () => {
    const mockResult = {
      movies: [],
      error: "",
    };

    expect(
      FilmCardReducer(mockState, {
        type: CLEAR_FILM_DATA,
        payload: [
          {
            imdbID: "123",
            Title: "Hello",
            Poster: "how are you",
            Year: "2020",
          },
        ],
      })
    ).toEqual(mockResult);
  });
});
