import React from "react";
import styles from "./SearchBox.module.css";
import { connect } from "react-redux";
import { searchChange } from "../../Redux/SearchBox/SearchBox.actions";
import {
  fetchedFilmData,
  clearMovies,
} from "../../Redux/FilmCard/FilmCard.actions";

const SearchBox = ({
  searchChange,
  handleSubmit,
  clearMovies,
  searchField,
  error,
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

      <button className={styles.button} onClick={handleSubmit}>
        Search
      </button>
      {searchField.length > 0 || error ? (
        <span
          className={styles.icon}
          role="img"
          aria-label="sheep"
          onClick={clearMovies}
        >
          &#10060;
        </span>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({
  moviesList: { error },
  searchText: { searchField },
}) => ({
  searchField,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  searchChange: (e) => dispatch(searchChange(e.target.value)),
  clearMovies: () => dispatch(clearMovies()),
  handleSubmit: (searchField) => dispatch(fetchedFilmData(searchField)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
