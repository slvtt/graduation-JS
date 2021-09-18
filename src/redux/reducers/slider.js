import {HIDE_SLIDER, NEXT_SLIDE, PREV_SLIDE, SHOW_SLIDER} from "../types";

const initialState = {
    isOpened: false,
    currentIndex:0,
    isLoaded:false,
}

export const openSlider = (state = initialState,action) => {
    switch (action.type) {
        case SHOW_SLIDER:{
            return{
                ...state,
                isOpened: true,
                currentIndex: action.payload.currentIndex,isLoaded: true
            }
        }
        case HIDE_SLIDER :{
            return {
                ...state,
                isOpened: false,
                currentIndex: 0,
                isLoaded: false,
            }
        }
        case NEXT_SLIDE:{
            return {
               ...state,
                currentIndex: action.payload.currentIndex
            }
        }
        case PREV_SLIDE:{
            return {
                ...state,
                currentIndex: action.payload.currentIndex
            }
        }
        default:return state
    }
}