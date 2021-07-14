import {combineReducers} from "redux";
import {authReducer} from './authReducer';
import {tokenReducer} from './tokenReducer';
import {initialLikes} from "./initialLikes";

export default combineReducers({
    authReducer,
    tokenReducer,
    initialLikes
})