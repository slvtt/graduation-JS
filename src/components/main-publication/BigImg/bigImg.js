import React from "react";

import './index.css';

import backBtn from '../../../public/img/back-btn.png'
import {Avatar, Box} from "@material-ui/core";

import defaultImgWhite from '../../../public/img/love_btn.png';
import defaultImgRed from '../../../public/img/love_btn_active.png';

import {likeClicked, removeLike} from "../../../redux/actions/likeClick";
import axios from "axios";
import {connect} from "react-redux";

const BigImg = ({photo,userIcon,userNickName,history,isLike,photoId}) => {

    const url = `https://api.unsplash.com/photos/${photoId}/like`;

    let token = JSON.parse(localStorage.getItem('token'));

    const likeClick = () => {

        if(!isLike){

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

    <div className="modal-overlay">
        <div className="modal__big-photo">
            <div className="modal-guts__big-photo">
                <div className="overlay-photo">
                    <div className="overlay-photo_header">
                        <Avatar src={userIcon}></Avatar>
                        <a>{userNickName}</a>
                    </div>
                   <img src={photo}/>
                </div>
                <button className="btn" onClick={likeClick}>
                    <img src={isLike === true ?defaultImgRed :defaultImgWhite}/>
                </button>
                <button className="back" onClick={()=> history.goBack()}>
                    <img src={backBtn}/>
                </button>

            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        photosRes:state.initialLikes.arrPhotos
    }
}

const mapDispatchToProps = {
    likeClicked,
    removeLike
}

export default connect(mapStateToProps,mapDispatchToProps)(BigImg)