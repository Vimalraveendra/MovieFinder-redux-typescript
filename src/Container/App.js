import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBox from "../Components/SearchBox/SearchBox";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const searchChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className={styles.App}>
      <h1>Movie finder</h1>
      <SearchBox searchChange={searchChange} />
    </div>
  );
};

export default App;
