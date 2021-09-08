const initialState = {
    isOpened: false,
    currentId:null
}

export const openSlider = (state = initialState,action) => {
    switch (action.type) {
        case 'SHOW_SLIDER':{
            return{
                ...state,
                isOpened: true,
                currentId: action.payload.id
            }
        }
        case 'HIDE_SLIDER' :{
            return {
                ...state,
                isOpened: false,
                currentId: null
            }
        }
        default:return state
    }
}