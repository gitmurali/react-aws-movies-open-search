import React from "react";

const SearchMovies = ({ handleOnChange }) => {
  return (
    <>
      <input
        type="text"
        onChange={handleOnChange}
        placeholder="search your favourite movie here"
      />
    </>
  );
};

export default SearchMovies;
