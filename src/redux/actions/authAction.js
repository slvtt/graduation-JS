import {IS_AUTH} from "../types";

export const authAction = (isAuth) =>{
    return {
        type:IS_AUTH,
        payload:isAuth
    }
}



