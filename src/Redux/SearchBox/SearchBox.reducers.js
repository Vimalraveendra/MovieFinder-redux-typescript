import SearchBoxActionTypes from "./SearchBox.types";

const initialState = {
  searchField: "",
};

export const searchChangeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SearchBoxActionTypes.HANDLE_SEARCH_CHANGE:
      return {
        ...state,
        searchField: action.payload,
      };

    default:
      return state;
  }
};
