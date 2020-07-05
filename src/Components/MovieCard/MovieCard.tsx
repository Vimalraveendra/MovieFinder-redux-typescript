import React from "react";
import styles from "./MovieCard.module.css";

export interface IProps {
  Title?: string;
  Poster?: string;
  Year?: string;
  error?: string | undefined;
}

// here we are going to specify the type of the parameters
const MovieCard: React.FC<IProps> = ({ Title, Poster, Year, error }) => {
  return Title ? (
    <div className={styles.moviecard}>
      <img src={Poster} alt="movie-poster" width="250" height="350" />
      <div>
        <h2>{Title}</h2>
        <p>Year:{Year}</p>
      </div>
    </div>
  ) : (
    <div className={styles.error}>
      <p>{error}</p>
    </div>
  );
};

export default MovieCard;
