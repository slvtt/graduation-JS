const initialState = {
    me:'initial User',
    isAuth:false
}

export const authReducer = (state = initialState,action) => {
    switch (action.type){
        case 'IS_AUTH':
            return {
                ...state,isAuth:true
            }

        default:return state
    }
}