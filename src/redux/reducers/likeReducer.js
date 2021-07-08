const initialState = {
   counter:null,
}

export const likeReducer = (state = initialState,action) => {
    switch (action.type){
        case 'LIKE_CLICK':
            let counterAdd = action.counter + 1;
            return {
                ...state,counter:counterAdd
            }

        default:return state
    }
}