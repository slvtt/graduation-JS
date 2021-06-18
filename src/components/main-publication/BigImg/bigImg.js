import React from "react";

import './index.css';

import backBtn from '../../../public/img/back-btn.png'
import {Avatar, Box} from "@material-ui/core";
const BigImg = ({photo,userImg,userNickName,history}) => {
    return(

    <div className="modal-overlay">
        <div className="modal__big-photo">
            <div className="modal-guts__big-photo">
                <div className="overlay-photo">
                    <div className="overlay-photo_header">
                        <Avatar src={userImg}></Avatar>
                        <a>{userNickName}</a>
                    </div>
                   <img src={photo}/>
                </div>
                <button className="back" onClick={()=> history.goBack()}>
                    <img src={backBtn}/>
                </button>
            </div>
        </div>
    </div>
    )
}

export default BigImg