import { combineReducers } from "redux";
import { FilmCardReducer } from "./FilmCard/FilmCard.reducers";
import { searchChangeReducer } from "./SearchBox/SearchBox.reducers";

const rootReducer = combineReducers({
  moviesList: FilmCardReducer,
  searchText: searchChangeReducer,
});

export default rootReducer;
