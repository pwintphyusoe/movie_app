import { ActionType } from "../../action/action_type"

const inititalState = {
    movies : [] ,
    movie : {}
}

const movieReducer = ( state = inititalState , { type, payload} ) => {
    switch(type){
        case ActionType.FETCH_MOVIES :
            return { ...inititalState,movies : payload};

        case ActionType.SELECTED_MOVIE : 
            return { ...inititalState , movie : payload};

        default : return state ;
    }
}

export default movieReducer