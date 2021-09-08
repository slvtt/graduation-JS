import React from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";

import {showSlider,hideSlider} from '../../../../redux/actions/slider'

const Slider = () => {
    const dispatch = useDispatch();
    const {isOpened,currentId}= useSelector(({openSlider})=> openSlider)
    const arrayPhotos = useSelector(({initialLikes})=> initialLikes.arrPhotos);

     const currentPhoto = arrayPhotos.filter((photo)=> {
        return photo.id === currentId
     })
    const handleCloseSlider = () => {
      dispatch(hideSlider())
    }
    return (
        <div className = {isOpened ? "modal-overlay active":"modal-overlay"} onClick={handleCloseSlider}>
            
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <img src={currentPhoto.map(item => item.urls.raw)}/>
                </div>

            <div className="close" onClick={handleCloseSlider}></div>
            <div className="slider-btn btn-left"  onClick={e => e.stopPropagation()}></div>
            <div className ="slider-btn btn-right" onClick={e => e.stopPropagation()}></div>
        </div>
    )
}

export default Slider