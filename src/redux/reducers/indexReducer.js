import {combineReducers} from "redux";
import {authReducer} from './authReducer';
import {tokenReducer} from './tokenReducer';
import {initialLikes} from "./initialLikes";
import {openSlider} from "./slider";

export default combineReducers({
    authReducer,
    tokenReducer,
    initialLikes,
    openSlider
})