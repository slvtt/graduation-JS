import React, { useState } from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";

import {hideSlider, nextSlide, prevSlide} from '../../../../redux/actions/slider'

const Slider = () => {
    const dispatch = useDispatch();
    const { isOpened,currentIndex }= useSelector(({openSlider})=> openSlider);
    const arrayPhotos = useSelector(({initialLikes})=> initialLikes.arrPhotos);
    const [current,setCurrent] = useState(currentIndex);
    const length = arrayPhotos.length;

     const nextPhoto = () => {
         setCurrent(currentIndex === length - 1 ? 0: current + 1)
         dispatch(nextSlide(current))
     }
     const prevPhoto = () => {
         setCurrent(currentIndex === 0 ? length - 1 : current - 1)
         dispatch(prevSlide(current))
     }
     const handleCloseSlider = () => {
       dispatch(hideSlider())
         setCurrent(currentIndex)
     }
    return (
        <div className = {isOpened ? "modal-overlay active":"modal-overlay"} onClick={handleCloseSlider}>
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <div className="user-photo"></div>
                <img src={arrayPhotos[currentIndex].urls.thumb}/>
                </div>

            <div className="close" onClick={handleCloseSlider}></div>
            <div className="slider-btn btn-left"
                onClick={e => {
                    prevPhoto()
                    e.stopPropagation()
            }
                }></div>
            <div className ="slider-btn btn-right" onClick={e => {
                nextPhoto()
                e.stopPropagation()
            }}></div>
        </div>
    )
}

export default Slider