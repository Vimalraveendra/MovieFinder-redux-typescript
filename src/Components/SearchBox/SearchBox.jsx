import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({
  searchChange,
  handleSubmit,
  clearMovies,
  searchField,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        placeholder="search movies here"
        onChange={searchChange}
      />

      <button className={styles.button} onClick={handleSubmit}>
        Search
      </button>
      <span
        className={styles.icon}
        role="img"
        aria-label="sheep"
        onClick={clearMovies}
      >
        &#10060;
      </span>
    </div>
  );
};

export default SearchBox;
