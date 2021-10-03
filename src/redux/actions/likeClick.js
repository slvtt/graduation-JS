import { LIKE} from "../types";
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
                console.log(res);
        })
            .catch(err=>console.log(err))
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
           })
           .catch(err => console.log(err))
   }
}

