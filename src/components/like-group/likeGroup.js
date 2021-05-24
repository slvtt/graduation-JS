import React from 'react';

const LikeBtnGroup = () => {
    const likeClick = (e) => {
        // console.log(e)
        e.preventDefault()
        const btn = document.querySelector('.like-btn');
        console.log(btn)
        btn.classList.add("active")
    }
    return(
        <section className="like-button-group">
            <button 
            className=" btn like-btn "
            onClick = {likeClick}
            ></button>
            <button className="magnifier btn"></button>
        </section>
    )
}

export default LikeBtnGroup;