import React from 'react'
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  console.log(movie)
  return (
    <div className='mx-auto'>
        <Link to={`/movie/details/${movie.id}`}>
          <div className="max-w-sm">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {movie.overview.slice(0,200)}
              </p>
              <div className="my-3">
                <span className='bg-black text-white p-2 rounded-xl'>
                <i className="fa-solid fa-star me-2"></i>{movie.vote_average}
                </span>
              </div>
              <div className="">
                <span className='bg-black text-white p-2 rounded-xl'>
                <i className="fa-solid fa-calendar-week me-2"></i>{movie.release_date}
                </span>
              </div>
            </Card>
          </div>
        </Link>
    </div>
  )
}

export default MovieCard