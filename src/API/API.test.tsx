import * as API from "./API";
import axios from "axios";

describe("Get FilmData", () => {
  it("should call the fetchFilmData and returns promise ", async () => {
    // setUp mocking the axios.get function to return promise resolve
    axios.get = jest.fn().mockReturnValue(
      Promise.resolve({
        data: {
          Search: [
            {
              imdbID: "1235",
              Title: "Hello",
              Poster: "how are you",
              Year: "2020",
            },
          ],
        },
      })
    );

    const expectedResult = [
      { imdbID: "1235", Title: "Hello", Poster: "how are you", Year: "2020" },
    ];

    //  calling the mockAxios function
    expect.assertions(2);
    const movies = await API.fetchFilmData("hello");

    //  assertions / expects
    expect(axios.get.mock.calls.length).toBe(1);
    expect(movies).toEqual(expectedResult);
  });

  it("should call the axios and return error promise", async () => {
    //  mocking the axios.get function to return promise rejected
    axios.get = jest.fn().mockReturnValue(
      Promise.reject({
        error: "Something went wrong!!!",
      })
    );
    const expectedOutput = { error: "Something went wrong!!!" };
    //  calling the mockAxios function
    expect.assertions(2);
    const movies = await API.fetchFilmData("hello");

    //  assertions / expects
    expect(axios.get.mock.calls.length).toBe(1);
    expect(movies).toEqual(expectedOutput);
  });
});
