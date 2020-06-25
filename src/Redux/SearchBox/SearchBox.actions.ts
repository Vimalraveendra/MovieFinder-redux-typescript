import {
  HANDLE_SEARCH_CHANGE,
  CLEAR_SEARCH_FIELD,
  SearchBoxActionTypes,
} from "./SearchBox.types";

// TypeScript infers that this function is returning SearchBoxAction.
// in here we need to do two things  one is the type of the parameter
// and the  second one is to specify return type for each one of these actions
//(in our case it is the searcnBoxActionTypes ie SEARCHFIELD_CHANGE)
// so here searchBoxActionTypes  specify  all the possible actions
// that redux store can take place
export const searchChange = (
  film: React.ChangeEvent<HTMLInputElement>
): SearchBoxActionTypes => ({
  type: HANDLE_SEARCH_CHANGE,
  payload: film,
});

export const clearSearchField = (): SearchBoxActionTypes => ({
  type: CLEAR_SEARCH_FIELD,
});
