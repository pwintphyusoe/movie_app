/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { Card , Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";

const Details = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();

  const movieDetails = async () => {
    const res = await api.get(`movie/${id}?api_key=${api_key}`)
    dispatch(selectedMovie(res.data))
  }

  useEffect( () => {
    if(id){
      movieDetails()
    }
    return () => dispatch(removeSelectedMovie({}))
  },[])

  let movie = useSelector( (state) => state.movies.movie)
  return (
    <div className="container flex flex-col items-center mt-5">
      <div className="">
        <span className="text-lg" onClick={ () => navigate('/')}><i className="fa-solid fa-arrow-left"></i>Back</span>
      </div>
      {
        JSON.stringify(movie) == '{}' ? <div><Spinner aria-label="Extra large spinner example" size="xl" /></div>: 
        <div>
          <Card
            className="max-w-sm"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div className="mt-3">
              <span className='bg-black text-white px-2 py-1 rounded-xl'>
              <i className="fa-solid fa-star me-2"></i>{movie.vote_average}
              </span>
              <span className='ms-3 bg-black text-white px-2 py-1 rounded-xl'>
              <i className="fa-solid fa-calendar-week me-2"></i>{movie.release_date}
              </span>
            </div>
            <div>
            <span className='bg-black text-white px-2 py-1 rounded-xl'>
              <i className="fa-solid fa-building me-2"></i>{movie.production_companies[0].name}
            </span>
            </div>
            <div>
            <span className='bg-black text-white px-2 py-1 rounded-xl'>
            <i className="fa-solid fa-earth-americas me-2"></i>{movie.production_countries[0].name}
            </span>
            </div>
          </Card>
        </div>
      }
    </div>
  );
};

export default Details;
