import {ARR_LIKE, LIKE, LIKE_ERROR, REMOVE_LIKE} from "../types";

const initialState = {
    arrPhotos:[],
    isLoaded:false,
    error:false
}

export const initialLikes = (state = initialState,action) =>{

    switch (action.type) {

        case ARR_LIKE:
            return{
                ...state,arrPhotos: action.payload,isLoaded: true
            }

        case LIKE:
            const currentLike = action.payload.like;
            const currentId = action.payload.id;
            const isLike = action.payload.isLike;
            let changedArr = state.arrPhotos.map((item) => {

                if (item.id === currentId){
                    item.likes = currentLike;
                    item.liked_by_user = isLike
                    return item
                }
                return item
            })

            return {
                ...state,arrPhotos: changedArr,error: false
            }

        case REMOVE_LIKE:
            const removedLike = action.payload.like;
            const removeId = action.payload.id;
            const removedFlag = action.payload.isLike

            let removedLikeArr = state.arrPhotos.map(item => {

                if (item.id === removeId) {
                    item.likes = removedLike;
                    item.liked_by_user = removedFlag;
                    console.log(item.id);
                    return item
                }

                return item
            })

            return {
                ...state,arrPhotos: removedLikeArr,error: false
            }

        case LIKE_ERROR:{
            return {...state,error: true}
        }
        case 'LEAVE':{
            return {...state,error: false}
        }
        case 'SHOW_ERROR':{
            return {...state,error: true}
        }

        default:
            return state
    }
}