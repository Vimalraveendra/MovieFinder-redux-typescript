import { HANDLE_SEARCH_CHANGE, CLEAR_SEARCH_FIELD } from "./SearchBox.types";

import * as actions from "./SearchBox.actions";

describe("Set SearchChange", () => {
  it("should create an action to movie finder", () => {
    const payload = "haiii";

    const expectedResult = {
      type: HANDLE_SEARCH_CHANGE,
      payload: payload,
    };
    expect(actions.searchChange(payload)).toEqual(expectedResult);
  });
});

describe("clear SearchField", () => {
  const expectedOutput = {
    type: CLEAR_SEARCH_FIELD,
  };
  it("should create an action to remove the searchField text ", () => {
    expect(actions.clearSearchField()).toEqual(expectedOutput);
  });
});
