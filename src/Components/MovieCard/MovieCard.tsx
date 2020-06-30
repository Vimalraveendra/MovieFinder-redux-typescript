import React from "react";
import styles from "./MovieCard.module.css";
import { IMovies } from "../../Redux/FilmCard/FilmCard.types";

interface IList {
  title: string;
  poster: string;
  year: number;
  error: string;
}

// here we are going to specify the type of the parameters
const MovieCard: React.FC<IList> = ({ title, poster, year, error }) => {
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
