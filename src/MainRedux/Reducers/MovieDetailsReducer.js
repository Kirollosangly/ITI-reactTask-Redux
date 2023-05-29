import { GET_MOVIE_DETAILS, HANDLE_UPDATE_CHANGE } from "../Actions/types";

const movieDetailsReducer = (state = { MovieDetails: {} }, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            return { ...state, MovieDetails: action.payload }
        case HANDLE_UPDATE_CHANGE:
            return { ...state, MovieDetails: { ...state.MovieDetails, [action.payload_name]: action.payload_value } }
        default:
            return { ...state }
    }
}

export default movieDetailsReducer;