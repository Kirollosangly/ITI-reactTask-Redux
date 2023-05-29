import { HANDLE_CHANGE } from "../Actions/types";

const addMovieReducer = (state = {
    newMovie: {
        title: '',
        overview: '',
        video: '',
        adult: '',
        popularity: '',
        releaseDate: '',
        uploadedImage: '',
    }
}, action) => {
    switch (action.type) {
        case HANDLE_CHANGE:
            return { ...state, newMovie: {...state.newMovie, [action.payload_name]: action.payload_value} }
        default:
            return { ...state }
    }
}

export default addMovieReducer;