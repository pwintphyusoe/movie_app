import React, { useRef } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {

  const movieName = useRef('');
  const dispatch = useDispatch();

  
  const searchMovies = async() => {
    if(movieName.current.value !== ''){
      const res = await api.get(`/search/movie?query=${movieName.current.value}&api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
    else{
      const res = await api.get(`/movie/popular?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results))
    }
  }

  return (
    <div>
      <Navbar fluid rounded>
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movies Channel
          </span>
        </Link>

        <div className="flex md:order-2 my-2 my-md-0">
          <TextInput className="me-1" ref={movieName} placeholder="Search..." />
          <Button color="dark" onClick={()=>searchMovies()}>Search</Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
