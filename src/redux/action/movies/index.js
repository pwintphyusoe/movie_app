import { ActionType } from "../action_type"

export const fetchMovies = (movies) => {
    // console.log(movies)
    return {
        type : ActionType.FETCH_MOVIES,
        payload : movies
    }
}

export const selectedMovie = (movie) => {
    return {
        type : ActionType.SELECTED_MOVIE,
        payload : movie
    }
}

export const removeSelectedMovie = (movie) => {
    return {
        type : ActionType.REMOVE_SELECTED_MOVIE,
        payload : movie
    }
}