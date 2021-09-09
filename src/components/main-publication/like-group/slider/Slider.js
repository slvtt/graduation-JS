import React, {useState} from 'react';
import './index.css'
import {useDispatch, useSelector} from "react-redux";

import {showSlider,hideSlider} from '../../../../redux/actions/slider'

const Slider = () => {
    const dispatch = useDispatch();
    const {isOpened,currentId}= useSelector(({openSlider})=> openSlider)
    const arrayPhotos = useSelector(({initialLikes})=> initialLikes.arrPhotos);
    const [current,setCurrent] = useState(arrayPhotos.findIndex(item => item.id === currentId));
    const length = arrayPhotos.length

     const currentPhoto = arrayPhotos.filter((photo)=> {
        return photo.id === currentId
     })

    const nextPhoto = () => {
        setCurrent(current === length - 1 ? 0: current + 1)
        console.log(current)
    }

    const prevPhoto = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(current)
    }
    const handleCloseSlider = () => {
      dispatch(hideSlider())
    }
    return (
        <div className = {isOpened ? "modal-overlay active":"modal-overlay"} onClick={handleCloseSlider}>
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <img src={currentPhoto.map((item,index) => {
                        if(index === current) {
                            return item.urls.raw
                        }
                    })}/>
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