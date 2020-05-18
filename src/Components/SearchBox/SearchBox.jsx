import React from "react";
import styles from "./SearchBox.module.css";

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

export default SearchBox;
