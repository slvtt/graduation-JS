import {ARR_LIKE} from "../types";

const initialState = {
    arrPhotos:null
}

export const initialLikes = (state = initialState,action) =>{
    switch (action.type) {

        case ARR_LIKE:

            return{
                ...state,arrPhotos: action.payload
            }

        default:
            return state
    }
}