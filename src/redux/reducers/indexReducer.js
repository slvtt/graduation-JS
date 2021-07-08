import {combineReducers} from "redux";
import {authReducer} from './authReducer';
import {tokenReducer} from './tokenReducer';
import {likeReducer} from "./likeReducer";

export default combineReducers({
    authReducer,
    tokenReducer,
    likeReducer
})