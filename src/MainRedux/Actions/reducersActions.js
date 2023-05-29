import axios from "axios";
import { GET_MOVIE_DETAILS, HANDLE_CHANGE, HANDLE_UPDATE_CHANGE, LOAD_HOME } from "./types";


export const getMoviesAction = async (dispatch) => {
    await axios.get(`http://localhost:3000/results`)
        .then((response) => {
            dispatch({
                type: LOAD_HOME,
                payload: response.data,
            })
        });
};

//*** *** *** ***
export const deleteMovie = async (id, dispatch) => {
    axios.delete(`http://localhost:3000/results/${id}`)
        .then(() => { getMoviesAction(dispatch) });
};

//*** *** *** ***
export const getOneMovie = async (id, dispatch) => {
    await axios.get(`http://localhost:3000/results/${id}`)
        .then((response) => {
            dispatch({
                type: GET_MOVIE_DETAILS,
                payload: response.data
            })
        });
};

//*** *** Add NewMovie *** ***
export const handleChange = (e, dispatch) => {
    const { name, value } = e;
    dispatch({
        type: HANDLE_CHANGE,
        payload_name: [name],
        payload_value: value
    })
};

export const handleSubmit = async (newMovie, dispatch) => {
    await axios.post(`http://localhost:3000/results`, newMovie)
        .then(() => { getMoviesAction(dispatch) })
};

//*** *** UpdateMovie *** ***
export const handleUpdateChange = (e, dispatch) => {
    const { name, value } = e;
    dispatch({
        type: HANDLE_UPDATE_CHANGE,
        payload_name: name,
        payload_value: value
    })
};

export const handleUpdateSubmit = async (updatedMovie, dispatch) => {
    console.log(updatedMovie);
    await axios.put(`http://localhost:3000/results/${updatedMovie.id}`, updatedMovie)
        .then(() => { getMoviesAction(dispatch) })
};
