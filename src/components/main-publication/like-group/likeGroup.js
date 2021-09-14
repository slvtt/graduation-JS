import { nanoid } from 'nanoid';
import React from 'react';
import axios from "axios";
import {connect} from "react-redux";

import defaultImgWhite from '../../../public/img/love_btn.png';
import defaultImgRed from '../../../public/img/love_btn_active.png';
import {likeClicked,removeLike} from "../../../redux/actions/likeClick";
import {showSlider} from "../../../redux/actions/slider";

const LikeBtnGroup = ({userNickName,userIcon,photoId,BigPhoto,likeClicked,removeLike,isLiked,showSlider}) => {

    const defaultImg = defaultImgWhite;
    const defaultImgActive = defaultImgRed;
    const url = `https://api.unsplash.com/photos/${photoId}/like`;
    let token = JSON.parse(localStorage.getItem('token'));

    const handleClickSlider = () => {
        showSlider(photoId)
    }
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
    return(
            <section className="like-button-group">
                <button
                    id = {nanoid()}
                    className=" btn"
                    onClick = {likeClick}
                >
                    <img src={isLiked === true? defaultImgActive  : defaultImg } />
                </button>
               <button className="magnifier btn" onClick={handleClickSlider}></button>
            </section>


    )
}

const mapStateToProps = (state) => {
    return {
        photosRes:state.initialLikes.arrPhotos
    }
}

const mapDispatchToProps = {
    likeClicked,
    removeLike,
    showSlider,
}

export default connect(mapStateToProps,mapDispatchToProps)(LikeBtnGroup);