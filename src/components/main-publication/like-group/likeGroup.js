import { nanoid } from 'nanoid';
import React from 'react';
import {connect} from "react-redux";

import defaultImgWhite from '../../../public/img/love_btn.png';
import defaultImgRed from '../../../public/img/love_btn_active.png';
import {likeClickPost, removeLikeDelete, showError} from "../../../redux/actions/likeClick";
import {showSlider} from "../../../redux/actions/slider";

const LikeBtnGroup = ({photoIndex,photoId,isLiked,showSlider,removeLikeDelete,likeClickPost,showError}) => {

    const defaultImg = defaultImgWhite;
    const defaultImgActive = defaultImgRed;
    const url = `https://api.unsplash.com/photos/${photoId}/like`;
    let token = JSON.parse(localStorage.getItem('token'));

    const handleClickSlider = () => {
        showSlider(photoIndex)
    }
    const likeClick = () => {
        if(!isLiked){
            if (token) {
                likeClickPost(token,photoId)
            }else {
                showError()
            }
        } else {
            removeLikeDelete(token,photoId)
        }
    }
    return(
            <section className="like-button-group">
                <button
                    id = {nanoid()}
                    className=" btn"
                    onClick = {likeClick}
                >
                    <img src={isLiked === true? defaultImgActive  : defaultImg } alt="likeBtn" />
                </button>
               <button className="magnifier btn" onClick={handleClickSlider}></button>
            </section>
    )
}

const mapStateToProps = (state) => {
    return {
        photosRes:state.initialLikes.arrPhotos,
        token:state.authReducer.token
    }
}
const mapDispatchToProps = {
    showSlider,
    removeLikeDelete,
    likeClickPost,
    showError
}

export default connect(mapStateToProps,mapDispatchToProps)(LikeBtnGroup);