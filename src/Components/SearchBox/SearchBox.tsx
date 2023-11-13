import React from "react";
import styles from "./SearchBox.module.css";

// here we are going to specify the type of the parameters that
// SearchBox components have
interface ISearchBox {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearMovies: () => void;
  handleSubmit: (searchField: string) => void;
  clearSearchField: () => void;
  searchField: string;
  error: string;
}

const SearchBox: React.FC<ISearchBox> = ({
  searchChange,
  handleSubmit,
  clearMovies,
  searchField,
  error,
  clearSearchField,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="search"
        placeholder="search movies..."
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
    </div>
  );
};

export default SearchBox;
