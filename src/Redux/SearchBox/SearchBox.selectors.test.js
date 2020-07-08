import * as Selectors from "./SearchBox.selectors";

describe("searchField selectors", () => {
  it("should return searchField with empty value ", () => {
    const mockState = {
      searchText: {
        searchField: "",
      },
    };
    const actual = Selectors.selectSearchField.resultFunc(mockState.searchText);
    expect(actual).toEqual("");
  });

  it("should return searchField with value ", () => {
    const mockState = {
      searchText: {
        searchField: "hello",
      },
    };

    // The thing is that Reselect is based on the composition concept.
    // So you create one selector from many others. What really you need to
    //  test is not the whole selector, but the last function which do the job.
    //   If not, the tests will duplicate each other, as if you have tests for
    //   selector1, and selector1 is used in selector2, then automatically you
    //   test both of them in selector2 tests.
    //     In order to achieve this:
    //    test only the result function of the selector. It is accessible by
    //    selector.resultFunc.
    const actual = Selectors.selectSearchField.resultFunc(mockState.searchText);
    expect(actual).toEqual("hello");
  });
});
