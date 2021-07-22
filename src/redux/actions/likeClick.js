import { LIKE} from "../types";
import {REMOVE_LIKE} from "../types";

export const likeClicked = (countLike,id,isLike) => {
    return {
        type:LIKE,
        payload:{
            id:id,
            like:countLike,
            isLike:isLike
        },
    }
}

export const removeLike = (countLike,id,isLike) => {
    return {
        type:REMOVE_LIKE,
        payload:{
            id:id,
            like: countLike,
            isLike:isLike
        }
    }
}

