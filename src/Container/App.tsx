import React from "react";
import styles from "./App.module.css";
import SearchBox from "../Components/SearchBox/SearchBox";
import MovieList from "../Components/MovieList/MovieList";

interface IAppProps {}
interface IAppState {}
class App extends React.Component<IAppProps, IAppState> {
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
