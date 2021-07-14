import {ARR_LIKE} from "../types";

export const arrLike = (arr) => {
    return {
        type: ARR_LIKE,
        payload:arr
    }
}