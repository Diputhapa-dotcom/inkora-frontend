import { createSlice } from "@reduxjs/toolkit";

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




  

