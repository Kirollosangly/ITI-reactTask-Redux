
import { applyMiddleware, createStore } from "redux";
import reduxThunk from 'redux-thunk';
// import homeReducer from "./Reducers/HomeReducer";
import combinedReducers from './Reducers'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(combinedReducers, enhancer(applyMiddleware(reduxThunk)));


export default store;

