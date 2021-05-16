const initialState = {
    arr:[]
}
export const fooReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'foo':
            return{
                ...state,payload:[...state.arr,action.payload]
            }
            
        default:return state
    }
}