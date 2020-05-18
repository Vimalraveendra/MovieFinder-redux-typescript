import React from "react";
import styles from "./App.module.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MovieList from "../Components/MovieList/MovieList";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
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
    this.setState({ movies: [], searchField: "" });
  };
  onHandleSubmit = async () => {
    const { searchField } = this.state;
    if (searchField.length > 0) {
      try {
        const {
          data: { Search },
        } = await axios.get(
          `http://www.omdbapi.com/?s=${searchField}&apikey=${API_KEY}`
        );
        this.setState({ movies: Search });
      } catch (error) {
        console.log("errors", error);
      }
    } else {
      this.setState({ error: "Sorry!!!, Please enter a film name" });
    }
  };

  render() {
    console.log("appError", this.state.error);
    const { searchField, movies, error } = this.state;
    return (
      <div className={styles.App}>
        <h1>Movie finder</h1>
        <SearchBox
          searchChange={this.searchChange}
          handleSubmit={this.onHandleSubmit}
          clearMovies={this.clearMovies}
          searchField={searchField}
        />
        <MovieList movies={movies} error={error} />
      </div>
    );
  }
}

export default App;
