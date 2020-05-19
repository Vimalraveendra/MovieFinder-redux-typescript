import SearchBoxActionTypes from "./SearchBox.types";

export const searchChange = (film) => ({
  type: SearchBoxActionTypes.HANDLE_CHANGE,
  payload: film,
});
