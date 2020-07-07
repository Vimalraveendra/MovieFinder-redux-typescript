import { HANDLE_SEARCH_CHANGE, CLEAR_SEARCH_FIELD } from "./SearchBox.types";

import { searchChangeReducer } from "./SearchBox.reducers";

describe("Search Movies", () => {
  const mockState = {
    searchField: "",
  };
  it("should render the initial state ", () => {
    expect(searchChangeReducer(undefined, {})).toEqual(mockState);
  });

  it("should handle the HANDLE_SEARCH_CHANGE action", () => {
    const mockResult = {
      searchField: "hello",
    };

    expect(
      searchChangeReducer(mockState, {
        type: HANDLE_SEARCH_CHANGE,
        payload: "hello",
      })
    ).toEqual(mockResult);
  });

  it("should handle the  CLEAR_SEARCH_FIELD Action", () => {
    const mockProps = {
      searchField: "hellooo",
    };
    expect(
      searchChangeReducer(mockProps, { type: CLEAR_SEARCH_FIELD })
    ).toEqual(mockState);
  });
});
