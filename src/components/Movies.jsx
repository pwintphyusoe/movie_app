import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { Spinner } from 'flowbite-react';

const Movies = () => {

  let movies = [];

  movies = useSelector( (state) => state.movies.movies)
  // console.log(movies)

  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
        {
          movies.length > 0 ? movies.map( movie => <MovieCard key={movie.id} movie={movie}/>) : <div><Spinner aria-label="Extra large spinner example" size="xl" /></div>
        }
      </div>
    </div>
  );
};

export default Movies;
