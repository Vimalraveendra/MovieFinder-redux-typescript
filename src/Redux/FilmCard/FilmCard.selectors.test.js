import * as Selectors from "./FilmCard.selectors";

describe("FilmCard Selectors", () => {
  it("should return the movieList with initial value", () => {
    const mockState = {
      movieList: {
        movies: [],
        isPending: false,
        error: "",
      },
    };
    const selected = Selectors.selectMovies.resultFunc(mockState.movieList);
    expect(selected).toEqual([]);
  });

  it("should return the movieList with movies", () => {
    const mockState = {
      movieList: {
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
      },
    };

    const expectedOutput = [
      {
        imdbID: "123",
        Title: "Hello",
        Poster: "how are you",
        Year: "2020",
      },
    ];
    const selected = Selectors.selectMovies.resultFunc(mockState.movieList);
    expect(selected).toEqual(expectedOutput);
  });

  it("should return the movieList with error", () => {
    const mockState = {
      movieList: {
        movies: [],
        isPending: false,
        error: "something went wrong",
      },
    };

    const expectedOutput = "something went wrong";
    const selected = Selectors.selectError.resultFunc(mockState.movieList);
    expect(selected).toEqual(expectedOutput);
  });
});
