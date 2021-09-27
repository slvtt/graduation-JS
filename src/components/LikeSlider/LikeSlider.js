import React from 'react';
import './index.scss';

import defaultImgWhite from '../../public/img/love_btn.png';
import defaultImgRed from "../../public/img/love_btn_active.png";
import axios from "axios";
import {likeClicked, removeLike} from "../../redux/actions/likeClick";

function LikeSlider({photoId,isLiked,countLikes}) {
   const defaultImgActive = defaultImgRed;
   const url = `https://api.unsplash.com/photos/${photoId}/like`;
   let token = JSON.parse(localStorage.getItem('token'));

    const likeClick = () => {
        if(!isLiked){
            if (token) {
                axios.post(url,null,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                    .then(res =>{
                        const id = res.data.photo.id;
                        const likes = res.data.photo.likes;
                        const isLike = res.data.photo.liked_by_user;
                        likeClicked(likes,id,isLike);
                        console.log(res);
                    })
                    .catch(err=>console.log(err))
            } else {
                alert('Похоже,что вы не авторизовались!')
            }
        } else {
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
                    removeLike(likes,id,isLike)
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className="like-container">
            <button className="btn-modal" onClick={likeClick}><img src={isLiked? defaultImgActive : defaultImgWhite} /></button>
            <div style={{marginLeft:'15px',fontWeight:'bold'}}>Нравится:{countLikes}</div>
        </div>

    );
}

export default LikeSlider;