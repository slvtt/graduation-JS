import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

import defaultImgWhite from '../../public/img/love_btn.png';
import defaultImgRed from '../../public/img/love_btn_active.png';

import {Switch, Link,BrowserRouter as Router,Route} from "react-router-dom";

import BigImg from "../main-publication/BigImg/bigImg";

const LikeBtnGroup = ({photo,userNickName,userImg,id}) => {
    const defaultImg = defaultImgWhite;
    const defaultImgActive = defaultImgRed;
    
    const [flag,setFlag] = useState(false);

    const url = `https://api.unsplash.com/photos/${id}/like`;
    const token = localStorage.getItem('token')
    const likeClick = () => {
        setFlag(!flag)

/*        fetch(url,{
            method:'post',
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))*/

        axios.post(url,null,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
            .then(res=> console.log(res))
            .catch(err=>console.log(err))
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
                       photo={photo}
                       userImg={userImg}
                       userNickName={userNickName}
                   />
               </Route>
            </Switch>
        </Router>

    )
}

export default LikeBtnGroup;