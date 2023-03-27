import React from "react";
import { useContext } from "react";
import MovieCard from "../MovieCard";
import { MovieListContext } from "../../App.js";


export default function CardsContainer() {
  const { loadedMovieList } = useContext(MovieListContext);

  return <>
    {loadedMovieList?.map((e, i) => {
      return (
        <MovieCard
          key={i}
          image={e.image}
          title={e.title}
          score={e?.imDbRating}
          year={e.year}
          crew={e.crew}
          id={e.id}
        />
      );
    })}
  </>;
}
