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

        case LIKE:

            const currentLike = action.payload.like;
            const currentId = action.payload.id;

            let changedArr = state.arrPhotos.map((item) => {

                if (item.id === currentId){
                    item.likes = currentLike
                    console.log(item.id)
                    return item
                }
                return item
            })

            return {
                ...state,arrPhotos: changedArr
            }

        case REMOVE_LIKE:

            const removedLike = action.payload.like;
            const removeId = action.payload.id;

            let removedLikeArr = state.arrPhotos.map(item => {

                if (item.id === removeId) {
                    item.likes = removedLike

                    console.log(item.id);
                    return item
                }

                return item
            })

            return {
                ...state,arrPhotos: removedLikeArr
            }

        default:
            return state
    }
}