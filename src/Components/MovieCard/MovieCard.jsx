import React from "react";
import styles from "./MovieCard.module.css";
const MovieCard = ({ title, poster, year, error }) => {
  console.log("error", error);
  return error ? (
    <div className={styles.moviecard}>
      <img src={poster} alt="movie-poster" height="350" />
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
    </div>
  ) : (
    <p>{error}</p>
  );
};

export default MovieCard;
