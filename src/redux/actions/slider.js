export const showSlider = (id) => {
    return {
        type:'SHOW_SLIDER',
        payload:{
            id
        }
    }
}

export const hideSlider = () => {
    return {
        type:'HIDE_SLIDER'
    }
}