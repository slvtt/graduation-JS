import React from "react";

import './index.css';
import {Avatar, Box} from "@material-ui/core";
const BigImg = ({photo,userImg,userNickName}) => {
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
                <button onClick={()=> history.goBack()}>back</button>
            </div>
        </div>
    </div>
    )
}

export default BigImg