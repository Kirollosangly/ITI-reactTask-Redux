import { LOAD_HOME } from "../Actions/types"


const homeReducer = (state = { sendMovies: [] }, action) => {
    switch (action.type) { 
        case LOAD_HOME: 
        return {...state, sendMovies: action.payload}
        default: 
        return {...state}
    }
}
export default homeReducer