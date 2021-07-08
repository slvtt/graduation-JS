import { LIKE} from "../types";

export const likeClicked = (countLike,id) => {
    return {
        type:LIKE,
        payload:countLike,
    }
}