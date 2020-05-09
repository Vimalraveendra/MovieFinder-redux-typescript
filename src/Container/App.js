import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MovieList from "../Components/MovieList/MovieList";
import axios from "axios";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [searchField, setSearchField] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchChange = (e) => {
    setSearchField(e.target.value);
  };

  const clearMovies = () => {
    setMovies([]);
    setSearchField("");
  };
  const onHandleSubmit = async () => {
    if (searchField.length > 0) {
      try {
        const {
          data: { Search },
        } = await axios.get(
          `http://www.omdbapi.com/?s=${searchField}&apikey=${API_KEY}`
        );
        setMovies(Search);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setError("Sorry!!!, Please enter a film name");
    }
  };

  console.log("error", error);
  return (
    <div className={styles.App}>
      <h1>Movie finder</h1>
      <SearchBox
        searchChange={searchChange}
        handleSubmit={onHandleSubmit}
        clearMovies={clearMovies}
        searchField={searchField}
      />
      <MovieList movies={movies} error={error} />
    </div>
  );
};

export default App;
