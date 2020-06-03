import SearchBoxActionTypes from "./SearchBox.types";

export const searchChange = (film) => {
  console.log("text", film);
  return {
    type: SearchBoxActionTypes.HANDLE_SEARCH_CHANGE,
    payload: film,
  };
};

export const clearSearchField = (text) => {
  console.log("text", text);
  return {
    type: SearchBoxActionTypes.CLEAR_SEARCH_FIELD,
    payload: text,
  };
};
