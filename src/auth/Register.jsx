import React from 'react'
import Auth from './component/Auth'
import axios from 'axios'
import { urlBase } from '../../config'
import { user } from '../slice/userSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
    const handleRegister = async (data) =>{
     dispatch((data)) 
    }


  return (
    <Auth type='Register' onSub = {handleRegister}/>
  )
}

export default Register