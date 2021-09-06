import React from 'react';

import './index.css'

const Slider = ({active,setActive,photo,name}) => {

    return (

        <div className = {active? "modal-overlay active":"modal-overlay"} onClick={()=>setActive(false)}>
            
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                   <img src={photo}/>
                </div>

            <div className="close" onClick={() => setActive(false)}></div>
            <div className="slider-btn btn-left"  onClick={e => e.stopPropagation()}></div>
            <div className ="slider-btn btn-right" onClick={e => e.stopPropagation()}></div>
        </div>
    )
}

export default Slider