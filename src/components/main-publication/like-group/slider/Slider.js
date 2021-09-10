import React, {useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";

import {hideSlider} from '../../../../redux/actions/slider'
import {Avatar} from "@material-ui/core";

const Slider = () => {
    const dispatch = useDispatch();
    const {isOpened,currentIndex}= useSelector(({openSlider})=> openSlider);
    const arrayPhotos = useSelector(({initialLikes})=> initialLikes.arrPhotos);
    const [current,setCurrent] = useState(currentIndex);
    const length = arrayPhotos.length;

    const nextPhoto = () => {
        setCurrent(current === length - 1 ? 0: current + 1)
    }
    const prevPhoto = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const handleCloseSlider = () => {
      dispatch(hideSlider())
    }
    return (
        <div className = {isOpened ? "modal-overlay active":"modal-overlay"} onClick={handleCloseSlider}>
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <div className="user-photo">
                        <Avatar src={arrayPhotos[current].user.profile_image.small}></Avatar>
                        <span className="user-nick-name">{arrayPhotos[current].user.username}</span>
                    </div>
                    <img src={arrayPhotos[current].urls.raw}/>
                </div>

            <div className="close" onClick={handleCloseSlider}></div>
            <div className="slider-btn btn-left"
                 onClick={e => {
                prevPhoto()
                e.stopPropagation()
            }}></div>
            <div className ="slider-btn btn-right" onClick={e => {
                nextPhoto()
                e.stopPropagation()
            }}></div>

        </div>
    )
}

export default Slider