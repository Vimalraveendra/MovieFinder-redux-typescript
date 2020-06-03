import React from "react";
import styles from "./MovieCard.module.css";
const MovieCard = ({ title, poster, year, error }) => {
  return title ? (
    <div className={styles.moviecard}>
      <img src={poster} alt="movie-poster" width="250" height="350" />
      <div>
        <h2>{title}</h2>
        <p>Year:{year}</p>
      </div>
    </div>
  ) : (
    <div className={styles.error}>
      <p>{error}</p>
    </div>
  );
};

export default MovieCard;
