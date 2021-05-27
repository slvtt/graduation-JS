const initialState = {
    me:'first user',
    arr:[]
}
export const defaultReducer = (state = initialState,action)=>{
    switch (action.type){
        
        case 'foo':
            return{
                ...state,payload:[...state.arr,action.payload]
            }
            
        default:return state
    }
}