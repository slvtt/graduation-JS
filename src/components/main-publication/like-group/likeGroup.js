import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

import defaultImgWhite from '../../../public/img/love_btn.png';
import defaultImgRed from '../../../public/img/love_btn_active.png';

import {likeClicked,removeLike} from "../../../redux/actions/likeClick";


import {Switch, Link,BrowserRouter as Router,Route} from "react-router-dom";

import BigImg from "../BigImg/bigImg";
import {connect} from "react-redux";

const LikeBtnGroup = ({userNickName,userIcon,photoId,BigPhoto,likeClicked,removeLike,isLiked}) => {

    const defaultImg = defaultImgWhite;

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

    const history = useHistory();

    return(
        <Router>
            <section className="like-button-group">
                <button
                    id = {nanoid()}
                    className=" btn"
                    onClick = {likeClick}
                >
                    <img src={isLiked === true? defaultImgActive  : defaultImg } />
                </button>
               <Link className="magnifier btn" to="/big-img"></Link>
            </section>

            <Switch>
               <Route exact path="/big-img">
                   <BigImg
                       name={photoId}
                       history={history}
                       photo={BigPhoto}
                       userIcon={userIcon}
                       photoId={photoId}
                       userNickName={userNickName}
                       isLike={isLiked}
                   />
               </Route>
            </Switch>
        </Router>

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
export default connect(mapStateToProps,mapDispatchToProps)(LikeBtnGroup);