import React from "react";
import styles from "./MovieCard.module.css";
const MovieCard = ({ title, poster, year }) => {
  return title ? (
    <div className={styles.moviecard}>
      <img src={poster} alt="movie-poster" height="350" />
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
    </div>
  ) : (
    <p>{"Sorry!!!, Please enter a film name"}</p>
  );
};

export default MovieCard;
