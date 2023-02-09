import React from "react";

const MoviesList = ({ results }) => {
  return (
    <div>
      {results?.map((result) => {
        return (
          <div className="movie" key={result.title}>
            <img src={result._source.image_url} alt="movie title" />
            <section className="movie__info">
              <div className="movie__title">{result._source.title}</div>
              <div className="movie__desc">{result._source.plot}</div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
