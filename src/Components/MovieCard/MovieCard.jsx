import React from "react";

const MovieCard = ({ title, poster, year }) => {
  console.log("poster", poster);
  return (
    <div>
      <img src={poster} alt="movie-poster" height="400" />
      <div>
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
