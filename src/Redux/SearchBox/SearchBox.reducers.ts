import {
  SearchBoxActionTypes,
  HANDLE_SEARCH_CHANGE,
  CLEAR_SEARCH_FIELD,
  ISearchBox,
} from "./SearchBox.types";

// the first thing to  do  specify type for the initial state or the default state.
// you have to make sure to import the types from the searchBox types.
const initialState: ISearchBox = {
  searchField: "",
};

// now we are going to specify the types for  parameters & return reducer types.
//Here we need to do two things , the first thing is to do a type
// for the action for that we need to import searchBoxActionsTypes.
// second thing is to do specify type for the return type as well
// in here we return the searchField  so here we need to say ISearchValue.
export const searchChangeReducer = (
  state = initialState,
  action: SearchBoxActionTypes
): ISearchBox => {
  switch (action.type) {
    case HANDLE_SEARCH_CHANGE:
      return {
        ...state,
        searchField: action.payload,
      };
    case CLEAR_SEARCH_FIELD:
      return {
        ...state,
        searchField: "",
      };
    default:
      return state;
  }
};
