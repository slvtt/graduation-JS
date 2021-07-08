import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

import defaultImgWhite from '../../../public/img/love_btn.png';
import defaultImgRed from '../../../public/img/love_btn_active.png';

import {likeClicked} from "../../../redux/actions/likeClick";

import {Switch, Link,BrowserRouter as Router,Route} from "react-router-dom";

import BigImg from "../BigImg/bigImg";
import {connect} from "react-redux";

const LikeBtnGroup = ({photo,userNickName,userImg,id,countLike,addCountLike,removeCountLike}) => {

    const defaultImg = defaultImgWhite;

    const defaultImgActive = defaultImgRed;

    const [flag,setFlag] = useState(false);

    const url = `https://api.unsplash.com/photos/${id}/like`;

    let token = JSON.parse(localStorage.getItem('token'));

    const likeClick = () => {


        if(!flag){

            if (token) {
                axios.post(url,null,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                    .then(res=> console.log(res))
                    .catch(err=>console.log(err))

                setFlag(!flag)
                addCountLike(countLike + 1)
            } else {
                alert('Похоже,что вы не авторизовались!')
            }

        } else {
            axios.delete(url,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))

            setFlag(!flag)
            removeCountLike(countLike)
        }


    }

    const history = useHistory();

    return(
        <Router>
            <section className="like-button-group">
                <div>{countLike}</div>
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
                       photo={photo}
                       userImg={userImg}
                       userNickName={userNickName}
                   />
               </Route>
            </Switch>
        </Router>

    )
}

const mapStateToProps = (state) => {
    return {
        counter:state.likeReducer
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addCountLike: (something) => dispatch({type:'LIKE',payload:something}),
        removeCountLike:(something) => dispatch({type:'REMOVE_LIKE',payload:something})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LikeBtnGroup);