import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { IMovies } from "../../Redux/FilmCard/FilmCard.types";

interface IMoviesListProps {
  movies: Array<IMovies>;
  error?: string | undefined;
  searchField: string;
}

const MovieList: React.FC<IMoviesListProps> = ({
  movies,
  error,
  searchField,
}) => {
  return (error ||movies===undefined) ? (
    <MovieCard error={error?error:"Please enter a valid movie name"} />
  ) : (
    <div className={styles.movielist}>
      {movies &&
        movies.map(({ imdbID, Title, Poster, Year }) => {
          return Poster !== "N/A" ? (
            <MovieCard key={imdbID} Title={Title} Poster={Poster} Year={Year} />
          ) : null;
        })}
    </div>
  );
};

export default MovieList;
