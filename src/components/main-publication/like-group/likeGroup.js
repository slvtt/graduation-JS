import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

import defaultImgWhite from '../../../public/img/love_btn.png';
import defaultImgRed from '../../../public/img/love_btn_active.png';

import {likeClicked} from "../../../redux/actions/likeClick";
import {removeLike} from "../../../redux/actions/removeLike";

import {Switch, Link,BrowserRouter as Router,Route} from "react-router-dom";

import BigImg from "../BigImg/bigImg";
import {connect} from "react-redux";

const LikeBtnGroup = ({userNickName,userIcon,photoId,BigPhoto,likeClicked,removeLike}) => {

    const defaultImg = defaultImgWhite;

    const defaultImgActive = defaultImgRed;

    const [flag,setFlag] = useState(false);

    const url = `https://api.unsplash.com/photos/${photoId}/like`;

    let token = JSON.parse(localStorage.getItem('token'));

    const likeClick = () => {

        if(!flag){

            if (token) {
                axios.post(url,null,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                    .then(res =>{
                        const id = res.data.photo.id;
                        const likes = res.data.photo.likes;

                        likeClicked(likes,id);

                        console.log(res);
                    })
                    .catch(err=>console.log(err))

                setFlag(!flag)

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

                    removeLike(id,likes)
                })
                .catch(err => console.log(err))

            setFlag(!flag)
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
                    <img src={flag === true? defaultImgActive  : defaultImg } />
                </button>
               <Link className="magnifier btn" to="/big-img"></Link>
            </section>

            <Switch>
               <Route exact path="/big-img">
                   <BigImg
                       history={history}
                       photo={BigPhoto}
                       userIcon={userIcon}
                       userNickName={userNickName}
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