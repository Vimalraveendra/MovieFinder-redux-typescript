import { combineReducers } from "redux";
import { FilmCardReducer } from "./FilmCard/FilmCard.reducers";
import { SearchBoxReducer } from "./SearchBox/SearchBox.reducers";

const rootReducer = combineReducers({
  moviesList: FilmCardReducer,
  searchText: SearchBoxReducer,
});

export default rootReducer;
