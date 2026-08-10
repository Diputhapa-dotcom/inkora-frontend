import React from 'react'
import Auth from './component/Auth'
import axios from 'axios'
import { urlBase } from '../../config'

const Register = () => {
    const handleRegister = async (data) =>{
      const response = await axios.post(`${urlBase}/register`,data)
      if(response.status === 201){

        console.log(response)
      }
    }


  return (
    <Auth type='Register' onSub = {handleRegister}/>
  )
}

export default Register