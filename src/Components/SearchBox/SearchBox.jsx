import React from "react";
import styles from "./SearchBox.module.css";
import { connect } from "react-redux";
import {
  searchChange,
  clearSearchField,
} from "../../Redux/SearchBox/SearchBox.actions";
import {
  fetchFilmDataStart,
  clearMovies,
} from "../../Redux/FilmCard/FilmCard.actions";

import { createStructuredSelector } from "reselect";
import { selectError } from "../../Redux/FilmCard/FilmCard.selectors";
import { selectSearchField } from "../../Redux/SearchBox/SearchBox.selectors";

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

const mapStateToProps = createStructuredSelector({
  searchField: selectSearchField,
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  searchChange: (e) => dispatch(searchChange(e.target.value)),
  clearMovies: () => dispatch(clearMovies()),
  handleSubmit: (searchField) => dispatch(fetchFilmDataStart(searchField)),
  // when the user click on the close icon we need to make the
  // input text empty
  clearSearchField: () => dispatch(clearSearchField()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
