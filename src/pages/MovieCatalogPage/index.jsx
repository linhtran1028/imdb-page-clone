import React from "react";
import { useCatalogPageContext } from "../../CatalogPageContext";
import MoviesList from "./components/MoviesList";
import TVShowsList from "./components/TVShowsList";

const MovieCatalogPage = () => {
  const { tab } = useCatalogPageContext();

  return (
    <>{tab === "movies" ? <MoviesList /> : <TVShowsList />}</>
  );
};

export default MovieCatalogPage;
