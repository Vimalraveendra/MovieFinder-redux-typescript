import SearchBoxActionTypes from "./SearchBox.types";

export const searchChange = (film) => ({
  type: SearchBoxActionTypes.HANDLE_SEARCH_CHANGE,
  payload: film,
});

export const clearSearchField = () => ({
  type: SearchBoxActionTypes.CLEAR_SEARCH_FIELD,
});
