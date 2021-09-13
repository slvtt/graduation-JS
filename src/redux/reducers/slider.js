const initialState = {
    isOpened: false,
    currentIndex:null
}

export const openSlider = (state = initialState,action) => {
    switch (action.type) {
        case 'SHOW_SLIDER':{
            return{
                ...state,
                isOpened: true,
                currentIndex: action.payload.currentIndex
            }
        }
        case 'HIDE_SLIDER' :{
            return {
                ...state,
                isOpened: false,
                currentIndex: null
            }
        }
        default:return state
    }
}