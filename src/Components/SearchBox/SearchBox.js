import React from "react";
import styles from "./SearchBox.module.css";
// import { connect } from "react-redux";
// import {
//   searchChange,
//   clearSearchField,
// } from "../../Redux/SearchBox/SearchBox.actions";
// import {
//   fetchFilmDataStart,
//   clearMovies,
// } from "../../Redux/FilmCard/FilmCard.actions";

// import { createStructuredSelector } from "reselect";
// import { selectError } from "../../Redux/FilmCard/FilmCard.selectors";
// import { selectSearchField } from "../../Redux/SearchBox/SearchBox.selectors";

// import { SearchBoxActionTypes } from "../../Redux/SearchBox/SearchBox.types";
// import { FilmCardActionTypes } from "../../Redux/FilmCard/FilmCard.types";

// // import { AppState } from "../../Redux/store";

// // //here we are doing aggregation of all the app action types
// // // & use it inside the mapDispatchToProps to dispatch actions.
// // type AppDispatchActions = SearchBoxActionTypes | FilmCardActionTypes;

// // here we are going to specify the type of the parameters that
// // SearchBox components have
// // interface ISearchBox {
// //   searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// //   clearMovies: () => void;
// //   handleSubmit: (searchField: string) => void;
// //   clearSearchField: () => void;
// //   searchField: string;
// //   error: string;
// // }

const SearchBox = ({
  searchChange,
  handleSubmit,
  clearMovies,
  searchField,
  error,
  clearSearchField,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        placeholder="search movies here"
        onChange={searchChange}
        value={searchField}
      />

      <button
        className={styles.button}
        onClick={() => handleSubmit(searchField)}
      >
        Search
      </button>
      {searchField.length > 0 || error ? (
        <span
          className={styles.icon}
          role="img"
          aria-label="sheep"
          onClick={() => {
            clearMovies();
            clearSearchField();
          }}
        >
          &#10060;
        </span>
      ) : null}
    </div>
  );
};

// interface LinKStateProps {
//   searchField: string;
//   error : string;
// }

// here we are specifying the return type of LinkMapDispatchProps
// interface LinkMapProps {
//   //  here we are dispatching actions to redux store so that we are not
//   //  returning anything that why we mentioned void
//   searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   clearMovies: () => void;
//   handleSubmit: (searchField: string) => void;
//   clearSearchField: () => void;
// }
// const mapStateToProps = createStructuredSelector<AppState, LinKStateProps>({
//   searchField: selectSearchField,
//   error: selectError,
// });

// const mapDispatchToProps = (
//   // here we are going to specify the type of the total app actions that are going to dispatch to
//   // redux store using the Dispatch keyword from redux & type AppDispatchActions
//   // then we are going to specify the return type of all these total app actions
//   // using the interface LinkMapProps
//   dispatch: Dispatch<AppDispatchActions>
// ): LinkMapProps => ({
//   searchChange: (event) => dispatch(searchChange(event.target.value)),
//   clearMovies: () => dispatch(clearMovies()),
//   handleSubmit: (searchField) => dispatch(fetchFilmDataStart(searchField)),
//   // when the user click on the close icon we need to make the
//   // input text empty
//   clearSearchField: () => dispatch(clearSearchField()),
// });

export default SearchBox;
