import { ActionTypes } from "./action-types";

const initialState = {
   
    isLoggedIn:false
   
};

const AuthReducer = (state: any = initialState, action:any) => {
  switch (action.type) {
   
   
      case ActionTypes.LOG_IN_USER: return {
        ...state,
        isLoggedIn:action.payload,
        
        
    }

  
    default:
      return state;
  }
};

export default AuthReducer;
