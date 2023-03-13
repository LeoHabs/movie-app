import React from "react";
import { useState } from "react";
import MovieCard from "../MovieCard";

export default function CardsContainer() {
  const [movieList, setMovieList] = useState;

  const renderMovieList = movieList.map((e, i) => {
    return (
      <MovieCard
        key={i}
        image={e.image}
        title={e.title}
        score={e.imDbRating}></MovieCard>
    );
  });
  return <>
    {renderMovieList}
  </>;
}
