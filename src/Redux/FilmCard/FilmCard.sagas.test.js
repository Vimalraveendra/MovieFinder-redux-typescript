import { REQUEST_FILM_DATA_SUCCESS } from "./FilmCard.types";
import * as API from "../../API/API";

import rootReducer from "../rootReducer";
import * as actions from "./FilmCard.sagas";
//  inOrder to create a fake store first we need to import
//  runSaga from redux saga
import { runSaga } from "redux-saga";

describe("Requesting Movies", () => {
  it("should dispatch action with fetchFilmDataSuccess", async () => {
    //   dispatched actions
    // we push all dispatched actions to make assertions easier
    // and our tests less brittle
    const dispatchedActions = [];

    // mocked movies
    const mockedResponse = [
      {
        imdbID: "1234",
        Title: "Hello",
        Poster: "how are you",
        Year: "2020",
      },
    ];

    const expectedResult = [
      {
        payload: [
          {
            imdbID: "1234",
            Title: "Hello",
            Poster: "how are you",
            Year: "2020",
          },
        ],
        type: REQUEST_FILM_DATA_SUCCESS,
      },
    ];
    //  create a MockApi function
    // we don't want to perform an actual api call in our tests
    // so we will mock the fetchFilmData api with jest
    // this will mutate the dependency which we may reset if other tests
    // are dependent on it
    API.fetchFilmData = jest.fn(() => Promise.resolve(mockedResponse));
    //   create a fakeStore

    const fakeStore = {
      getState: () => rootReducer,
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, actions.fetchFilmDataAsync, {
      payload: "hello",
    }).done;
    expect.assertions(2);
    expect(API.fetchFilmData.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(expectedResult);
  });

  it("should dispatch action with fetchFilmDataFails", async () => {
    //   dispatched actions
    // we push all dispatched actions to make assertions easier
    // and our tests less brittle
    const dispatchedActions = [];

    //  mock error
    const error = "something went wrong!!!";

    const expectedOutput = [
      { payload: "something went wrong!!!", type: "REQUEST_FILM_DATA_FAILURE" },
    ];

    // we simulate an error by rejecting the promise
    // then we assert if our saga dispatched the action(s) correctly

    API.fetchFilmData = jest.fn(() => Promise.reject(error));
    //   create a fakeStore

    const fakeStore = {
      getState: () => rootReducer,
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, actions.fetchFilmDataAsync, {
      payload: "hello",
    }).done;

    expect.assertions(2);
    expect(API.fetchFilmData.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(expectedOutput);
  });
});
