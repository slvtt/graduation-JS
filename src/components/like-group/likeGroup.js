import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import defaultImgWhite from '../../public/img/love_btn.png';
import defaultImgRed from '../../public/img/love_btn_active.png'

import {Switch, Link, BrowserRouter,Route} from "react-router-dom";

import BigImg from "../main-publication/BigImg/bigImg";

const LikeBtnGroup = ({photo,userNickName,userImg}) => {
    const defaultImg = defaultImgWhite;
    const defaultImgActive = defaultImgRed;
    
    const [flag,setFlag] = useState(false)

    const likeClick = () => {
        setFlag(!flag)
    }

    return(
        <BrowserRouter history={history}>
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
                   <BigImg photo={photo}
                        userImg={userImg}
                           userNickName={userNickName}
                   />
               </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default LikeBtnGroup;