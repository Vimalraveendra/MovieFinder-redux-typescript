import React from "react";
import styles from "./MovieCard.module.css";

export interface IList {
  title: string;
  poster: string;
  year: number;
}
export interface IProps {
  error: string;
}

type IMoviesProps = IList & IProps;
// here we are going to specify the type of the parameters
const MovieCard: React.FC<IMoviesProps> = ({ title, poster, year, error }) => {
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
