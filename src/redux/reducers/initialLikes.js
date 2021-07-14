import {ARR_LIKE,LIKE,REMOVE_LIKE} from "../types";

const initialState = {
    arrPhotos:[]
}

export const initialLikes = (state = initialState,action) =>{

    switch (action.type) {

        case ARR_LIKE:

            return{
                ...state,arrPhotos: action.payload
            }

/*        case LIKE:

            const currentLike = action.payload.like;
            const currentId = action.payload.id;

            let changedArr = state.arrPhotos.forEach((item) => {

                if (item.id === currentId){
                    item.likes = currentLike
                }
            })
            return {
                ...state,arrPhotos: changedArr
            }*/

        default:
            return state
    }
}