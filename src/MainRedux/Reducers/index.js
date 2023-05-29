import { combineReducers } from "redux";
import homeReducer from "./HomeReducer";
import movieDetailsReducer from "./MovieDetailsReducer";
import addMovieReducer from "./AddMovieReducer";

export default combineReducers({
    home: homeReducer,
    movie: movieDetailsReducer,
    addmovie: addMovieReducer,
})