// Describing the shape of the searchField slice of state
export interface ISearchBox {
  searchField: string;
}

export const HANDLE_SEARCH_CHANGE = "HANDLE_SEARCH_CHANGE";
export const CLEAR_SEARCH_FIELD = "CLEAR_SEARCH_FIELD";

// so we are exporting each actions in typescript format
export interface handleSearchChange {
  type: typeof HANDLE_SEARCH_CHANGE;
  payload: React.ChangeEvent<HTMLInputElement>;
}

export interface clearSearchField {
  type: typeof CLEAR_SEARCH_FIELD;
}

// here we making the aggregation all these typescript actions
// for that I am using the union operator or OR  operator.
export type SearchBoxActionTypes = handleSearchChange | clearSearchField;
