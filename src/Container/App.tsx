import React from "react";
import styles from "./App.module.css";
import SearchBoxPage from "./SearchBoxPage";
import MovieList from "../Components/MovieList/MovieList";

interface IAppProps {}
interface IAppState {}
//  here we are mentioning the type of the props and state
// of a class component
class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <div className={styles.App}>
        <h1>Movie finder</h1>
        <SearchBoxPage />
        <MovieList />
      </div>
    );
  }
}

export default App;
