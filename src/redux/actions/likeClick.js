import { LIKE} from "../types";
import {REMOVE_LIKE} from "../types";

export const likeClicked = (countLike,id) => {
    return {
        type:LIKE,
        payload:{
            id:id,
            like:countLike,
        },
    }
}

export const removeLike = (countLike,id) => {
    return {
        type:REMOVE_LIKE,
        payload:{
            id:id,
            like: countLike
        }
    }
}

