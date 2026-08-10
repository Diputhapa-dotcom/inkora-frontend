import React from 'react'
import Auth from './component/Auth'
import axios from 'axios'
import { urlBase } from '../../config'

const Login = () => {
    const handleLogin =async  (data) =>{
     const response = await axios.post(`${urlBase}/login`,data,{
        headers : {
          "Authorization" : localStorage.getItem('token')
        }
       })
       if(response.status === 201){
        console.log("logged in successfully")
       }

    }
  return (
<Auth type="Login" onsub = {handleLogin}/>  )
}

export default Login