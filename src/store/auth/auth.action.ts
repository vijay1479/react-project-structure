import { ActionTypes } from "./action-types";

export const LoginUser = (value:any)=>{
    console.log("paylod" ,value)
    return {
        type: ActionTypes.LOG_IN_USER,
        payload:value
    }
}



