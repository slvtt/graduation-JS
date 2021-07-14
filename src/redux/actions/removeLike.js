import {REMOVE_LIKE} from "../types";

export const removeLike = (id, countLike) => {
    return {
        type: REMOVE_LIKE,
        payload:{
            id:id,
            like:countLike
        }
    }
}