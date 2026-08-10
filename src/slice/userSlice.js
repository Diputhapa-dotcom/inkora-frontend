import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../auth/globals/status";
import axios from "axios";
import { urlBase } from "../../config";

const userSlice = createSlice({
    name : 'user' ,
    initialState = {
        data : [],
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


export function user(data){
  return async function userThunk(dispatch){
    dispatch(setStatus( STATUSES.LOADING))

    const response = axios.post(`${urlBase}/register`,data)
    if(response.status === 200){
      dispatch(setStatus(STATUSES.SUCCESS))

    }else{
      dispatch(setStatus(STATUSES.ERROR))
    }

  }

}




  

