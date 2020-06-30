import { createSelector } from "reselect";
import { AppState } from "../../Redux/store";

const selectSearchText = (state: AppState) => state.searchText;

export const selectSearchField = createSelector(
  [selectSearchText],
  (searchText) => searchText.searchField
);
