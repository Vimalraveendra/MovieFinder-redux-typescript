import { combineReducers } from "redux";
import { FilmCardReducer } from "./FilmCard/FilmCard.reducers";
import { SearchBoxReducer } from "./SearchBox/SearchBox.reducers";

export const rootReducer = combineReducers({
  moviesList: FilmCardReducer,
  searchText: SearchBoxReducer,
});
