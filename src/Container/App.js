import React from "react";
import styles from "./App.module.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MovieList from "../Components/MovieList/MovieList";

import { fetchFilmData } from "../API/API";

class App extends React.Component {
  state = {
    searchField: "",
    movies: [],
    error: "",
  };

  searchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  clearMovies = () => {
    this.setState({ movies: [], searchField: "", error: "" });
  };

  onHandleSubmit = async () => {
    const { searchField } = this.state;
    if (searchField.length > 0) {
      const Search = await fetchFilmData(searchField);
      this.setState({ movies: Search });
    } else {
      this.setState({ error: "Sorry!!!, Please enter a film name" });
    }
  };

  render() {
    const { searchField, movies, error } = this.state;
    return (
      <div className={styles.App}>
        <h1>Movie finder</h1>
        <SearchBox
          searchChange={this.searchChange}
          handleSubmit={this.onHandleSubmit}
          clearMovies={this.clearMovies}
          searchField={searchField}
          error={error}
        />
        <MovieList movies={movies} error={error} />
      </div>
    );
  }
}

export default App;
