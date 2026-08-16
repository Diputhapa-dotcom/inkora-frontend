import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../auth/globals/status";
import axios from "axios";
import { urlBase } from "../../config";

const userSlice = createSlice({
    name : 'user' ,
    initialState : {
        data : null,
        status : ''
    },
    reducers : {
        setData(state,action){
          state.data = action.payload
        },

        setStatus(state,action){
          state.status = action.payload 
        }
    }
})
export const {setData,setStatus} = userSlice.actions
export default userSlice.reducer


export function login(data){
  return async function loginThunk(dispatch){
    dispatch(setStatus( STATUSES.LOADING));
    try{
      const response = await axios.post(`${urlBase}/login`,data)
      if(response.status === 200){
        dispatch(setStatus(STATUSES.SUCCESS))
        dispatch(setData(response.data))
      }else{
        dispatch(setStatus(STATUSES.ERROR))
      }
    }catch(err){
      dispatch(setStatus(STATUSES.ERROR))
    }
  }
}


export function register(data){
  return async function registerThunk(dispatch){
    dispatch(setStatus( STATUSES.LOADING));
    try{
      const response = await axios.post(`${urlBase}/register`,data)
      if( response.status === 200){
        dispatch( setStatus( STATUSES.SUCCESS))
        dispatch(setData( response.data ))
      }else{
        dispatch( setStatus(STATUSES.ERROR))
      }
    }catch(err){
      dispatch( setStatus(STATUSES.ERROR))
    }
  }
}




  

