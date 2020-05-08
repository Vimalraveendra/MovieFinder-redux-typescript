import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchChange, handleSubmit }) => {
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
    </div>
  );
};

export default SearchBox;
