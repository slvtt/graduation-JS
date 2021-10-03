import React from 'react';
import './index.scss';
import axios from "axios";

import defaultImgWhite from '../../public/img/love_btn.png';
import defaultImgRed from "../../public/img/love_btn_active.png";
import {likeClickPost,removeLikeDelete} from "../../redux/actions/likeClick";
import {useDispatch} from "react-redux";

function LikeSlider({photoId,isLiked,countLikes}) {
    const dispatch = useDispatch()
    const defaultImgActive = defaultImgRed;
    let token = JSON.parse(localStorage.getItem('token'));

    const likeClick = () => {
        if(!isLiked){
            if (token) {
               dispatch(likeClickPost(token,photoId))
            } else {
                alert('Похоже,что вы не авторизовались!')
            }
        } else {
           dispatch(removeLikeDelete(token,photoId))
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