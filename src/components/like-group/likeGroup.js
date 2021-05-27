import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import defaultImgWhite from '../../public/img/love_btn.png';
import defaultImgRed from '../../public/img/love_btn_active.png'

const LikeBtnGroup = () => {

    const defaultImg = defaultImgWhite;
    const defaultImgActive = defaultImgRed;
    
    const [flag,setFlag] = useState(false)


    const likeClick = () => {
        setFlag(flag = true)
    }

    return(
        <section className="like-button-group">
            <button
            id = {nanoid()}
            className=" btn"
            onClick = {likeClick}
            >
                <img src={flag === true? defaultImgActive  : defaultImg } />
            </button>
            <button className="magnifier btn"></button>
        </section>
    )
}

export default LikeBtnGroup;