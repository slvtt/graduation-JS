export const showSlider = (currentIndex) => {
    return {
        type:'SHOW_SLIDER',
        payload:{
            currentIndex
        }
    }
}

export const hideSlider = () => {
    return {
        type:'HIDE_SLIDER'
    }
}

export const nextSlide = (currentIndex,length) => {
    return{
        type:'NEXT_SLIDE',
        payload:{
            currentIndex
        }
    }
}

export const prevSlide = (currentIndex,length) => {
    return {
        type:'PREV_SLIDE',
        payload:{
            currentIndex
        }
    }
}