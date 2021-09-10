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