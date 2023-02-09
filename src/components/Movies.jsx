import React, { useDeferredValue, useState, useEffect } from "react";

import MoviesList from "./MoviesList";
import SearchMovies from "./SearchMovies";

export const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesData, setMovies] = useState([]);

  const deferredInput = useDeferredValue(searchTerm);

  useEffect(() => {
    if (deferredInput !== "") {
      fetchMovies(deferredInput).then((movies) => {
        setMovies(movies);
      });
    } else {
      setMovies([]);
    }
  }, [deferredInput]);

  const fetchMovies = async (input) => {
    return fetch(
      `https://h3czkapaq1.execute-api.eu-west-2.amazonaws.com/opensearch-api-test?q=${input}`
    )
      .then((res) => res.json())
      .then((movieData) => {
        return movieData.hits.hits;
      });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="movies">
      <h1>Movies</h1>
      <SearchMovies handleOnChange={handleOnChange} />
      <MoviesList results={moviesData} />
    </div>
  );
};
