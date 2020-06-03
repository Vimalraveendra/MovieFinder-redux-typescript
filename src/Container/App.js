import React from "react";
import styles from "./App.module.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MovieList from "../Components/MovieList/MovieList";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>Movie finder</h1>
        <SearchBox />
        <MovieList />
      </div>
    );
  }
}

export default App;
