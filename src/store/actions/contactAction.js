import * as ActionTypes from "../ActionTypes";
import API from "../../network/apiUrl"

export const getContacts = (data, dispatch) =>{
    API.getContacts(data)
    .then((response) => response.json())
    .then((response)=>{
        if(response.success){
            dispatch({
                type : ActionTypes.GET_CONTACTS,
                payload : response.data,
                success: response.success,
            })
        }
    })
}

export const addContact = (data, dispatch) =>{
    // setLoading(true,dispatch);
    API.addContact(data)
    .then((response) => response.json())
    .then((response)=>{
        if(response.success){
            dispatch({
                type : ActionTypes.ADD_CONTACT,
                payload : response.message,
                success: response.success,
            })
        }else{
            dispatch({
                type : ActionTypes.SET_ERROR,
                payload : response.error.errors[0].message,
                success: response.success,
            })
        }
    })
}