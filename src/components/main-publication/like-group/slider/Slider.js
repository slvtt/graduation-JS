import React, { useState } from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";

import {hideSlider, nextSlide, prevSlide} from '../../../../redux/actions/slider'

const Slider = () => {
    const dispatch = useDispatch();
    const {isOpened,currentIndex,isLoaded}= useSelector(({openSlider})=> openSlider);
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
         setCurrent(null)
     }
    return (
        <div className = {isOpened ? "modal-overlay active":"modal-overlay"} >
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <div className="user-photo"></div>
                <img src={arrayPhotos[currentIndex].urls.raw}/>
                </div>

            <div className="close" onClick={handleCloseSlider}></div>
            <div className="slider-btn btn-left"
                onClick={e => {
                    prevPhoto()
                    dispatch(prevSlide(current))
                    e.stopPropagation()
            }
                }></div>
            <div className ="slider-btn btn-right" onClick={e => {
                nextPhoto()
                dispatch(nextSlide(current)),
                e.stopPropagation()
            }}></div>

        </div>
    )
}

export default Slider