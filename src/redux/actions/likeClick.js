import {LIKE, LIKE_ERROR} from "../types";
import {REMOVE_LIKE} from "../types";
import axios from "axios";

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
export const likeClickPost = (token,id) => {
    const url = `https://api.unsplash.com/photos/${id}/like`;
    return dispatch => {
        axios.post(url,null,{
            headers:{
                Authorization:`Bearer ${token}`
            }}).then(res =>{
                const id = res.data.photo.id;
                const likes = res.data.photo.likes;
                const isLike = res.data.photo.liked_by_user;
                dispatch(likeClicked(likes,id,isLike))
                dispatch(likeErrorLeave())
                console.log(res);
        })
            .catch(err=> {
                dispatch(likeError(err.message))
                console.log(err)
            })
    }
}
export const removeLikeDelete = (token,id) =>{
   const url = `https://api.unsplash.com/photos/${id}/like`;
   return dispatch => {
       axios.delete(url,{
           headers:{
               Authorization:`Bearer ${token}`
           }
       })
           .then(res => {
               const id = res.data.photo.id;
               const likes = res.data.photo.likes;
               const isLike = res.data.photo.liked_by_user;
               console.log(res)
               dispatch(removeLike(likes,id,isLike))
               dispatch(likeErrorLeave())
           })
           .catch(err => console.log(err))
   }
}
export const likeError = (e) => {
    return {
        type:LIKE_ERROR,
        payload:e,
    }
}
export const leave = () => {
    return {
        type:'LEAVE'
    }
}
export const showError = () => {
    return {
        type:'SHOW_ERROR'
    }
}
export const likeErrorLeave = () => {
    return dispatch => {
        setTimeout(()=> dispatch(leave()),210)
    }
}

