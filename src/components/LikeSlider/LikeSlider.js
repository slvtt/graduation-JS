import React from 'react';

import './index.scss'
import defaultImgWhite from '../../public/img/love_btn.png';
import likedImg from '../../public/img/love_btn_active.png';

function LikeSlider(props) {
    return (
        <div className="like-container">
            <img src={defaultImgWhite} />
        </div>

    );
}

export default LikeSlider;