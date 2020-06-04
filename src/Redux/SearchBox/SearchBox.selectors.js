import { createSelector } from "reselect";

const selectSearchText = (state) => state.searchText;

export const selectSearchField = createSelector(
  [selectSearchText],
  (searchText) => searchText.searchField
);
