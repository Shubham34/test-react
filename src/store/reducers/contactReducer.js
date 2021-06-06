import * as actionTypes from "../ActionTypes";
const initialState = {
    contacts : [],
    success : true,
    error_message : "",
    loading : false,
  };
  
  export const contactReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.GET_CONTACTS: {
            return {
                ...state,
                contacts : action.payload
            }
        }
        case actionTypes.ADD_CONTACT : {
            return {
                ...state,
                success : action.success,
                error : action.error,
                payload : action.payload,
            }
        }
        case actionTypes.SET_SUCCESS : {
             return{
                 ...state,
                 success : action.success
             }
         }
         case actionTypes.SET_ERROR : {
             return{
                 ...state,
                 error_message : action.payload,
                 success : action.success
             }
         }
         case actionTypes.SET_LOADING : {
             return {
                 ...state,
                 loading : action.payload
             }
         }
          default : {
              return {
                  ...state
              }
          }
      }
  }